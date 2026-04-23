import { describe, it, expect } from 'vitest';
import { es } from '@/i18n/es';
import { en } from '@/i18n/en';
import { useTranslations } from '@/i18n/utils';

// ---------------------------------------------------------------------------
// Helper: recursively collect all "leaf" key paths from an object
// ---------------------------------------------------------------------------
function collectLeafPaths(obj: object, prefix = ''): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      return collectLeafPaths(value as object, path);
    }
    if (Array.isArray(value)) {
      return value.flatMap((item, i) => {
        if (item !== null && typeof item === 'object') {
          return collectLeafPaths(item as object, `${path}[${i}]`);
        }
        return [`${path}[${i}]`];
      });
    }
    return [path];
  });
}

// ---------------------------------------------------------------------------
// Unit tests — key parity
// ---------------------------------------------------------------------------
describe('i18n key parity (es ↔ en)', () => {
  const esPaths = collectLeafPaths(es).sort();
  const enPaths = collectLeafPaths(en).sort();

  it('en.ts has every key that es.ts has', () => {
    const missingInEn = esPaths.filter((p) => !enPaths.includes(p));
    expect(missingInEn, `Keys in es.ts missing from en.ts: ${missingInEn.join(', ')}`).toHaveLength(0);
  });

  it('es.ts has every key that en.ts has', () => {
    const missingInEs = enPaths.filter((p) => !esPaths.includes(p));
    expect(missingInEs, `Keys in en.ts missing from es.ts: ${missingInEs.join(', ')}`).toHaveLength(0);
  });

  it('both files have the same total number of leaf keys', () => {
    expect(esPaths.length).toBe(enPaths.length);
  });
});

// ---------------------------------------------------------------------------
// Unit tests — section exports
// ---------------------------------------------------------------------------
describe('i18n section exports', () => {
  const requiredSections = [
    'meta',
    'navbar',
    'hero',
    'clients',
    'services',
    'stats',
    'caseStudies',
    'testimonials',
    'team',
    'socialLinks',
    'contact',
    'footer',
  ] as const;

  for (const section of requiredSections) {
    it(`es.ts exports section: ${section}`, () => {
      expect(es[section]).toBeDefined();
    });

    it(`en.ts exports section: ${section}`, () => {
      expect(en[section]).toBeDefined();
    });
  }
});

// ---------------------------------------------------------------------------
// Unit tests — services section
// ---------------------------------------------------------------------------
describe('i18n — services section', () => {
  it('es.services.items has 4 items', () => {
    expect(es.services.items).toHaveLength(4);
  });

  it('en.services.items has 4 items', () => {
    expect(en.services.items).toHaveLength(4);
  });

  it('every service item has required fields (es)', () => {
    for (const item of es.services.items) {
      expect(item.id).toBeTruthy();
      expect(item.title).toBeTruthy();
      expect(item.shortDesc).toBeTruthy();
      expect(item.fullDesc).toBeTruthy();
    }
  });

  it('every service item has required fields (en)', () => {
    for (const item of en.services.items) {
      expect(item.id).toBeTruthy();
      expect(item.title).toBeTruthy();
      expect(item.shortDesc).toBeTruthy();
      expect(item.fullDesc).toBeTruthy();
    }
  });
});

// ---------------------------------------------------------------------------
// Unit tests — stats section
// ---------------------------------------------------------------------------
describe('i18n — stats section', () => {
  it('es.stats.items has 3 items', () => {
    expect(es.stats.items).toHaveLength(3);
  });

  it('en.stats.items has 3 items', () => {
    expect(en.stats.items).toHaveLength(3);
  });

  it('stat items have numeric value and string label (es)', () => {
    for (const item of es.stats.items) {
      expect(typeof item.value).toBe('number');
      expect(typeof item.label).toBe('string');
      expect(item.label.length).toBeGreaterThan(0);
    }
  });

  it('stat values match between locales', () => {
    es.stats.items.forEach((esItem, i) => {
      expect(en.stats.items[i].value).toBe(esItem.value);
    });
  });
});

// ---------------------------------------------------------------------------
// Integration tests — useTranslations hook
// ---------------------------------------------------------------------------
describe('useTranslations hook — integration', () => {
  it('returns correct string for es locale (hero section)', () => {
    const t = useTranslations('es');
    expect(t('hero', 'cta')).toBe('AGENDAR ASESORAMIENTO');
  });

  it('returns correct string for en locale (hero section)', () => {
    const t = useTranslations('en');
    expect(t('hero', 'cta')).toBe('SCHEDULE A CONSULTATION');
  });

  it('works with services section — es', () => {
    const t = useTranslations('es');
    expect(t('services', 'sectionLabel')).toBe('Servicios');
  });

  it('works with services section — en', () => {
    const t = useTranslations('en');
    expect(t('services', 'sectionLabel')).toBe('Services');
  });

  it('works with stats section — es', () => {
    const t = useTranslations('es');
    expect(t('stats', 'ariaLabel')).toBe('Estadísticas de Nimbel Code');
  });

  it('works with stats section — en', () => {
    const t = useTranslations('en');
    expect(t('stats', 'ariaLabel')).toBe('Nimbel Code statistics');
  });

  it('works with contact section — es', () => {
    const t = useTranslations('es');
    expect(t('contact', 'headline')).toBe('Agenda con nosotros una asesoría gratuita');
  });

  it('works with contact section — en', () => {
    const t = useTranslations('en');
    expect(t('contact', 'headline')).toBe('Schedule a free consultation with us');
  });

  it('works with footer section — es', () => {
    const t = useTranslations('es');
    expect(t('footer', 'copyright')).toBe('© 2026 Nimbel Code LTD. Todos los derechos reservados.');
  });

  it('works with footer section — en', () => {
    const t = useTranslations('en');
    expect(t('footer', 'copyright')).toBe('© 2026 Nimbel Code LTD. All rights reserved.');
  });

  it('works with testimonials section — es', () => {
    const t = useTranslations('es');
    expect(t('testimonials', 'headline')).toBe('Lo que dicen nuestros clientes');
  });

  it('works with team section — en', () => {
    const t = useTranslations('en');
    expect(t('team', 'headline')).toBe('MEET OUR TEAM');
  });

  it('works with caseStudies section — es', () => {
    const t = useTranslations('es');
    expect(t('caseStudies', 'headline')).toBe('PROYECTOS DESTACADOS');
  });

  it('works with clients section — en', () => {
    const t = useTranslations('en');
    expect(t('clients', 'headline')).toBe('Trusted by');
  });
});
