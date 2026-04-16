# ESPECIFICACIONES: Nimbel Code Landing Page — Completar al 100%

**Estado**: Ready for Implementation  
**Proyecto**: Nimbel Code Landing (Astro 5.18.1 + Tailwind 4.1.18 + TypeScript 5.9.3 strict)  
**Convención**: Responsive mobile-first (breakpoints: <640px, 640-1024px, >1024px)

---

## Tabla de Contenidos

1. [PHASE 1: Foundation](#phase-1-foundation)
   - Carousel.tsx
   - ClientsCarousel.astro (REFACTOR)
   - ServicesHeadline.astro (REFACTOR)
   - Form Validation Utility

2. [PHASE 2: Content](#phase-2-content)
   - Services.astro
   - Stats.astro
   - CaseStudies.astro

3. [PHASE 3: Social Proof](#phase-3-social-proof)
   - Testimonials.astro
   - Team.astro
   - SocialLinks.astro

4. [PHASE 4: Conversion](#phase-4-conversion)
   - Contact.astro
   - Footer.astro

---

## ARQUITECTURA DE COMPONENTES

**Componentes Interactivos (React)**:
- Carousel.tsx — Complex state management (autoplay, navigation, responsiveness)
- Contact.tsx — Form validation, submission, error handling

**Componentes Estáticos (Astro)**:
- Services.astro, Stats.astro, CaseStudies.astro (uses Carousel.tsx)
- Testimonials.astro (uses Carousel.tsx)
- Team.astro, SocialLinks.astro
- Footer.astro

**Stack**:
- Astro 5.18.1 with React 19 hydration (client:load for interactive components)
- Tailwind CSS 4.1.18
- TypeScript 5.9.3 strict
- Vitest + @testing-library/react for React component tests

---

# PHASE 1: Foundation

## COMPONENTE: Carousel.tsx

### DESCRIPCIÓN
Componente carousel reutilizable en React (TSX). Soporta navegación automática, botones prev/next, dots de navegación, y responsividad. Base para CaseStudies y Testimonials.

### REQUISITOS FUNCIONALES
- Req 1: Mostrar items en carrusel horizontal con transiciones suaves
- Req 2: Soportar navegación con botones prev/next
- Req 3: Mostrar dots de navegación para saltar a slide específico
- Req 4: Autoplay opcional con intervalo configurable (default: 5000ms)
- Req 5: Parar autoplay en hover (desktop) o interacción (mobile)
- Req 6: Soporte para touch/swipe en mobile
- Req 7: Loop infinito (volver al primer slide después del último)

### REQUISITOS TÉCNICOS
**i18n**: No requiere (wrapper component)

**Implementación**:
- React 19 (Astro hydration: client:load)
- TypeScript: archivo .tsx en src/components/
- Sin librerías externas de carousel (lógica vanilla en React hooks)
- Props pasadas como React props (no data-* attributes)

**Responsive**:
- Mobile (<640px): items-per-view = 1, gap = 16px
- Tablet (640-1024px): items-per-view = 2, gap = 20px  
- Desktop (>1024px): items-per-view = 3, gap = 24px

**SEO**: N/A (solo estructura)

**Accessibility**:
- aria-label en botones: "Previous slide" / "Next slide"
- aria-current="true" en dot activo
- role="region" en carousel
- role="tab" en dots
- Keyboard nav: Left/Right arrows para prev/next, Home/End para primero/último
- Focus visible en todos los botones

### ESTRUCTURA LAYOUT

```
<div class="carousel-wrapper">
  <div class="carousel-container">
    <div class="carousel-track" style="transform: translateX(...)">
      <div class="carousel-item">{slot}</div>
      <div class="carousel-item">{slot}</div>
      ...
    </div>
  </div>
  
  <button class="carousel-prev" aria-label="Previous slide">❮</button>
  <button class="carousel-next" aria-label="Next slide">❯</button>
  
  <div class="carousel-dots">
    <button class="dot" aria-current="true" aria-label="Go to slide 1">•</button>
    <button class="dot" aria-label="Go to slide 2">•</button>
    ...
  </div>
</div>
```

### TYPESCRIPT INTERFACE

```typescript
interface Props {
  itemsPerView?: number; // Default: 3 (desktop), 2 (tablet), 1 (mobile)
  gap?: number; // Default: 24 (pixels)
  autoplay?: boolean; // Default: true
  autoplayInterval?: number; // Default: 5000 (ms)
  showDots?: boolean; // Default: true
  showArrows?: boolean; // Default: true
  loop?: boolean; // Default: true
}
```

### ESCENARIOS

**Scenario 1: Auto-rotate carousel**
- Given: Carousel with autoplay=true, interval=5000ms
- When: Page loads
- Then: Slides rotate automatically every 5 seconds

**Scenario 2: Pause autoplay on hover**
- Given: Carousel with autoplay=true
- When: User hovers over carousel (desktop)
- Then: Autoplay pauses until mouse leaves

**Scenario 3: Navigate with next button**
- Given: Carousel at slide 1
- When: User clicks "next" button
- Then: Carousel transitions to slide 2 with CSS animation

**Scenario 4: Keyboard navigation**
- Given: User with keyboard only
- When: User presses Right arrow key (focus on carousel)
- Then: Carousel advances to next slide

**Scenario 5: Touch swipe on mobile**
- Given: Carousel on mobile device
- When: User swipes left on carousel
- Then: Carousel advances to next slide

**Scenario 6: Dot navigation**
- Given: Carousel with dots visible
- When: User clicks dot 3
- Then: Carousel jumps to slide 3 with animation

### EDGE CASES
- Only 1 item: Show carousel but no prev/next/dots (or disable buttons)
- Very fast interaction: Debounce clicks to prevent rapid navigation
- Touch on desktop: Support both touch and mouse events
- Small viewport: Ensure dots/buttons don't overflow on mobile

### TEST STRUCTURE

```typescript
describe('Carousel', () => {
  test('renders items correctly', () => {
    const { container } = render(Carousel, {
      props: { autoplay: false },
      slots: { default: '<div class="item">Item 1</div><div class="item">Item 2</div>' }
    });
    expect(container.querySelectorAll('.carousel-item')).toHaveLength(2);
  });

  test('advances on next button click', async () => {
    const { container } = render(Carousel, {
      props: { autoplay: false },
      slots: { default: `<div class="item">1</div><div class="item">2</div>` }
    });
    const nextBtn = container.querySelector('.carousel-next');
    await nextBtn.click();
    // Assert transform translateX changed
  });

  test('supports keyboard navigation', async () => {
    const { container } = render(Carousel);
    const carousel = container.querySelector('[role="region"]');
    const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
    carousel.dispatchEvent(event);
    // Assert carousel advanced
  });

  test('autoplay works', async () => {
    const { container } = render(Carousel, { props: { autoplayInterval: 100 } });
    await new Promise(r => setTimeout(r, 150));
    // Assert slide changed
  });

  test('is accessible with aria labels', () => {
    const { container } = render(Carousel);
    expect(container.querySelector('[aria-label*="Previous"]')).toBeInTheDocument();
    expect(container.querySelector('[role="region"]')).toBeInTheDocument();
  });
});
```

### PERFORMANCE
- LCP: No (carousel is not LCP contributor)
- CSS animations only (no JS on every frame)
- Lazy load images inside carousel items: Yes (parent component handles)

### DEPENDENCIES
- None (vanilla JS)

### NOTAS
- Usar CSS `transform: translateX()` para animaciones suaves
- Implementar con Intersection Observer para lazy-load items
- Considerar usar `@media (prefers-reduced-motion)` para respect motion preferences

---

## COMPONENTE: ClientsCarousel.astro (REFACTOR)

### DESCRIPCIÓN
Refactor del carousel de logos de clientes existente para ser responsive en mobile/tablet. Actualmente solo funciona en desktop.

### REQUISITOS FUNCIONALES
- Req 1: Mostrar marquee animation infinita con logos de clientes en desktop
- Req 2: En mobile/tablet, usar carousel responsive (no marquee, que es horizontal scroll)
- Req 3: Mostrar 4-6 logos en desktop, 2-3 en tablet, 1-2 en mobile

### REQUISITOS TÉCNICOS
**i18n**: 
- es.ts: `clients.headline: "Confían en nosotros"`
- en.ts: `clients.headline: "Trusted by"`

**Responsive**:
- Mobile (<640px): 2 items visible, marquee OFF → use Carousel
- Tablet (640-1024px): 3 items visible, marquee OFF → use Carousel
- Desktop (>1024px): 6 items visible, marquee ON (infinite scroll)

**SEO**:
- Heading: H2
- Image alt: "[Company name] logo"
- No lazy loading (logos are critical, above fold)

**Accessibility**:
- aria-label="Client logos carousel" on container
- role="region"
- All logo images have alt text

### ESTRUCTURA LAYOUT

```
## Desktop (>1024px)
Marquee horizontal infinito:
[Logo1][Logo2][Logo3][Logo4][Logo5][Logo6] [Logo1][Logo2]...

## Tablet (640-1024px)
<section>
  <h2>Confían en nosotros</h2>
  [Carousel: 3 items visible]
  [Prev Btn][Item1 Item2 Item3][Next Btn]
</section>

## Mobile (<640px)
<section>
  <h2>Confían en nosotros</h2>
  [Carousel: 2 items visible]
  [Prev Btn][Item1 Item2][Next Btn]
  [Dots: 1 2 3]
</section>
```

### TYPESCRIPT INTERFACE

```typescript
interface Props {
  locale: Locale;
  clients: Array<{
    name: string;
    logo: string; // image path
  }>;
}
```

### ESCENARIOS

**Scenario 1: Desktop marquee animation**
- Given: Viewport > 1024px
- When: Page loads
- Then: Logos scroll infinitely from right to left

**Scenario 2: Tablet responsive**
- Given: Viewport 640-1024px
- When: Page loads
- Then: Carousel shows 3 items with prev/next buttons

**Scenario 3: Mobile responsive**
- Given: Viewport < 640px
- When: Page loads
- Then: Carousel shows 2 items with dots navigation

**Scenario 4: Resize from desktop to tablet**
- Given: Desktop viewport with marquee running
- When: User resizes window to tablet
- Then: Marquee stops, carousel appears with 3 items

### EDGE CASES
- Only 1 client logo: Don't show marquee/carousel
- 2-3 logos: Show without rotation/dots
- Marquee continuous loop: Ensure no visual gaps

### TEST STRUCTURE

```typescript
describe('ClientsCarousel', () => {
  test('renders marquee on desktop', () => {
    const { container } = render(ClientsCarousel, { 
      props: { locale: 'es', clients: [...] }
    });
    expect(container.querySelector('.marquee')).toBeInTheDocument();
  });

  test('is responsive on mobile (< 640px)', async () => {
    // Mock viewport < 640px
    const { container } = render(ClientsCarousel, { props: { ... } });
    expect(container.querySelector('.carousel')).toBeInTheDocument();
    expect(container.querySelectorAll('.carousel-item')).toHaveLength(2);
  });

  test('has proper heading', () => {
    const { container } = render(ClientsCarousel, { props: { ... } });
    expect(container.querySelector('h2')).toHaveTextContent('Confían en nosotros');
  });
});
```

### SEO
- [ ] H2 heading present
- [ ] All logo images have alt text
- [ ] aria-label on carousel region

### ACCESSIBILITY
- [ ] aria-label on container
- [ ] All images have descriptive alt text
- [ ] Marquee can be paused (respect prefers-reduced-motion)

### PERFORMANCE
- LCP: Logos are critical (above fold), lazy load: NO
- Marquee: Use CSS animation (performant)

### DEPENDENCIES
- Carousel.tsx (for mobile/tablet views)

---

## COMPONENTE: ServicesHeadline.astro (REFACTOR)

### DESCRIPCIÓN
Refactor del headline de servicios para ser responsive. Actualmente solo muestra título, necesita ajustar tamaños y spacing en mobile.

### REQUISITOS FUNCIONALES
- Req 1: Mostrar headline principal con énfasis en palabra clave
- Req 2: Responsive font sizes (ajustar en mobile/tablet/desktop)
- Req 3: Mantener estructura visual con colores (orange + white text)

### REQUISITOS TÉCNICOS
**i18n**:
- es.ts: `services.headline: "Desarrollo de aplicaciones..."` (con partes highlighted)
- en.ts: English version

**Responsive**:
- Mobile (<640px): text-3xl, padding-x: 1.5rem
- Tablet (640-1024px): text-4xl, padding-x: 2rem
- Desktop (>1024px): text-5xl, padding-x: 3rem

**SEO**:
- Heading: H2
- No schema needed (structural only)

**Accessibility**:
- Semantic h2 tag
- High contrast (text on dark bg)

### ESTRUCTURA LAYOUT

```
<section>
  <h2 class="font-mortend text-3xl max-md:text-4xl max-lg:text-5xl uppercase">
    Desarrollo de aplicaciones a medida, Apps móvil y 
    <span class="text-orange-500">plataformas</span>
    web
  </h2>
</section>
```

### TYPESCRIPT INTERFACE

```typescript
interface Props {
  locale: Locale;
}
```

### ESCENARIOS

**Scenario 1: Responsive font sizing**
- Given: Mobile viewport (<640px)
- When: Page loads
- Then: Headline uses text-3xl

**Scenario 2: Desktop rendering**
- Given: Desktop viewport (>1024px)
- When: Page loads
- Then: Headline uses text-5xl with proper spacing

### TEST STRUCTURE

```typescript
describe('ServicesHeadline', () => {
  test('renders h2 heading', () => {
    const { container } = render(ServicesHeadline, { props: { locale: 'es' } });
    expect(container.querySelector('h2')).toBeInTheDocument();
  });

  test('has responsive font classes', () => {
    const { container } = render(ServicesHeadline, { props: { locale: 'es' } });
    const h2 = container.querySelector('h2');
    expect(h2).toHaveClass('max-md:text-4xl');
    expect(h2).toHaveClass('max-lg:text-5xl');
  });
});
```

### ACCESSIBILITY
- [ ] Proper H2 heading level
- [ ] Color contrast >= 4.5:1 (WCAG AA)

---

## COMPONENTE: Form Validation Utility (src/scripts/formValidation.ts)

### DESCRIPCIÓN
Utilidad TypeScript para validar formularios en el lado del cliente. Reutilizable para Contact form y otros formularios.

### REQUISITOS FUNCIONALES
- Req 1: Validar email format
- Req 2: Validar campos requeridos
- Req 3: Validar longitud mínima/máxima
- Req 4: Validar teléfono (formato)
- Req 5: Retornar errores en estructura clara

### TYPESCRIPT INTERFACE

```typescript
interface ValidationError {
  field: string;
  message: string;
}

interface FormData {
  [key: string]: string;
}

interface ValidationRules {
  [field: string]: {
    required?: boolean;
    email?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: string) => boolean;
  };
}

export function validateForm(data: FormData, rules: ValidationRules): ValidationError[] {
  // Implementation
}

export function validateEmail(email: string): boolean {
  // Implementation
}

export function validateRequired(value: string): boolean {
  // Implementation
}
```

### TEST STRUCTURE

```typescript
describe('Form Validation', () => {
  test('validates email correctly', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('invalid-email')).toBe(false);
  });

  test('validates required field', () => {
    expect(validateRequired('text')).toBe(true);
    expect(validateRequired('')).toBe(false);
  });

  test('validates form with multiple rules', () => {
    const data = { email: 'test@example.com', name: 'John' };
    const rules = {
      email: { required: true, email: true },
      name: { required: true, minLength: 2 }
    };
    const errors = validateForm(data, rules);
    expect(errors).toHaveLength(0);
  });
});
```

---

# PHASE 2: Content

## COMPONENTE: Services.astro

### DESCRIPCIÓN
Grid de 4 servicios principales con cards expandibles. Al hacer click, cada card se expande mostrando descripción completa.

### REQUISITOS FUNCIONALES
- Req 1: Mostrar 4 servicios en grid (nombre + descripción corta + icono)
- Req 2: Cards expandibles (click → expandir, mostrar descripción larga)
- Req 3: Solo una card expandida a la vez (collapse others)
- Req 4: Animación suave de expansión
- Req 5: Responsive grid (1→2→3 columns en móvil/tablet/desktop)

### REQUISITOS TÉCNICOS
**i18n**:
- es.ts: `services.headline, services.items[].title, services.items[].shortDesc, services.items[].fullDesc`
- en.ts: Same structure

**Responsive**:
- Mobile (<640px): 1 column, full width
- Tablet (640-1024px): 2 columns, gap-20
- Desktop (>1024px): 4 columns (1 row), gap-24

**SEO**:
- Heading: H2 (servicios)
- No images (solo iconos inline/CSS)
- Schema: Service schema for each service

**Accessibility**:
- role="button" o <button> en cada card
- aria-expanded="true/false" indicando estado
- Keyboard nav: Tab entre cards, Enter para expandir, Escape para cerrar

### ESTRUCTURA LAYOUT

```
## Mobile (<640px)
<section>
  <h2>Servicios</h2>
  <div class="grid grid-cols-1 gap-5">
    <card aria-expanded="false">
      <h3>Desarrollo de aplicaciones</h3>
      <p>Short desc...</p>
    </card>
    <card aria-expanded="true">
      <h3>Diseño UX/UI</h3>
      <p>Full desc visible...</p>
    </card>
    ...
  </div>
</section>

## Desktop (>1024px)
<section>
  <h2>Servicios</h2>
  <div class="grid grid-cols-4 gap-6">
    <card>[Card 1]</card>
    <card>[Card 2]</card>
    <card>[Card 3]</card>
    <card>[Card 4]</card>
  </div>
</section>
```

### TYPESCRIPT INTERFACE

```typescript
interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon?: string;
}

interface Props {
  locale: Locale;
}
```

### ESCENARIOS

**Scenario 1: Click to expand**
- Given: Card in collapsed state
- When: User clicks card
- Then: Card expands, showing full description with animation

**Scenario 2: Click to collapse**
- Given: Card in expanded state
- When: User clicks expanded card again
- Then: Card collapses back to short description

**Scenario 3: Only one expanded**
- Given: Card 1 is expanded
- When: User clicks Card 2
- Then: Card 1 collapses, Card 2 expands

**Scenario 4: Keyboard navigation**
- Given: User with keyboard only
- When: User presses Tab to focus card, then Enter
- Then: Card expands

**Scenario 5: Responsive grid**
- Given: Mobile viewport (<640px)
- When: Page loads
- Then: Services show in 1 column

### EDGE CASES
- Text overflow: truncate or wrap?
- Very short description: still expandable?
- Touch on mobile: tap to expand/collapse

### TEST STRUCTURE

```typescript
describe('Services', () => {
  test('renders 4 service cards', () => {
    const { container } = render(Services, { props: { locale: 'es' } });
    expect(container.querySelectorAll('[role="button"]')).toHaveLength(4);
  });

  test('expands on click', async () => {
    const { container } = render(Services, { props: { locale: 'es' } });
    const card = container.querySelector('[role="button"]');
    await card.click();
    expect(card).toHaveAttribute('aria-expanded', 'true');
  });

  test('collapses previous card when opening new', async () => {
    const { container } = render(Services, { props: { locale: 'es' } });
    const cards = container.querySelectorAll('[role="button"]');
    await cards[0].click();
    await cards[1].click();
    expect(cards[0]).toHaveAttribute('aria-expanded', 'false');
    expect(cards[1]).toHaveAttribute('aria-expanded', 'true');
  });

  test('is responsive on mobile', () => {
    // Mock mobile viewport
    const { container } = render(Services, { props: { locale: 'es' } });
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('grid-cols-1');
  });
});
```

### SEO
- [ ] H2 heading present
- [ ] Each service has Service schema (name, description, provider)
- [ ] Heading hierarchy correct

### ACCESSIBILITY
- [ ] Cards have role="button"
- [ ] aria-expanded attribute correct
- [ ] Keyboard nav: Tab, Enter, Escape
- [ ] Focus visible on all cards
- [ ] Color contrast >= 4.5:1

### PERFORMANCE
- LCP: No (content section, not LCP)
- Animation: CSS only

---

## COMPONENTE: Stats.astro

### DESCRIPCIÓN
Sección de estadísticas con 3 números animados: 15 años, 50 proyectos, 25 rescatados. Numbers animan desde 0 hasta el valor final cuando entran en viewport.

### REQUISITOS FUNCIONALES
- Req 1: Mostrar 3 stats en grid/flex
- Req 2: Animar números desde 0 al valor final (en-page, no on-load)
- Req 3: Mostrar label bajo cada número
- Req 4: Trigger animation cuando stat entra en viewport (Intersection Observer)
- Req 5: Responsive layout (1→2→3 columns)

### REQUISITOS TÉCNICOS
**i18n**:
- es.ts: `stats.items[].value, stats.items[].label`
- en.ts: Same

**Responsive**:
- Mobile (<640px): 1 column or 3-row flex
- Tablet (640-1024px): 3 columns
- Desktop (>1024px): 3 columns, centered

**SEO**:
- Heading: H2 (si necesario, solo stats container)
- No schema needed (informacional)

**Accessibility**:
- aria-label="Statistics section"
- No role="region" needed (estructural)

### ESTRUCTURA LAYOUT

```
<section class="bg-teal-700 py-20">
  <div class="grid grid-cols-3 max-md:grid-cols-1 gap-10">
    <div class="text-center">
      <div class="text-6xl font-bold text-white">15</div>
      <p class="text-lg text-gray-100">AÑOS DE EXPERIENCIA</p>
    </div>
    <div class="text-center">
      <div class="text-6xl font-bold text-white">50</div>
      <p class="text-lg text-gray-100">PROYECTOS EXITOSOS</p>
    </div>
    <div class="text-center">
      <div class="text-6xl font-bold text-white">25</div>
      <p class="text-lg text-gray-100">PROYECTOS RESCATADOS</p>
    </div>
  </div>
</section>
```

### TYPESCRIPT INTERFACE

```typescript
interface StatItem {
  value: number;
  label: string;
}

interface Props {
  locale: Locale;
}
```

### ESCENARIOS

**Scenario 1: Animation triggers on scroll**
- Given: Stats section below fold
- When: User scrolls to stats
- Then: Numbers animate from 0 to final value over 2 seconds

**Scenario 2: Animation only once**
- Given: Stats has animated once
- When: User scrolls back up then down again
- Then: Animation does NOT repeat (only once)

**Scenario 3: Responsive on mobile**
- Given: Mobile viewport
- When: Page loads
- Then: Stats in single column

### EDGE CASES
- Numbers very large: ensure they fit in viewport
- Very fast scroll: animation completes even if user scrolls quickly
- No Intersection Observer support: gracefully degrade to static numbers

### TEST STRUCTURE

```typescript
describe('Stats', () => {
  test('renders 3 stat items', () => {
    const { container } = render(Stats, { props: { locale: 'es' } });
    expect(container.querySelectorAll('[class*="stat"]')).toHaveLength(3);
  });

  test('displays numbers and labels', () => {
    const { container } = render(Stats, { props: { locale: 'es' } });
    expect(container).toHaveTextContent('15');
    expect(container).toHaveTextContent('AÑOS DE EXPERIENCIA');
  });

  test('is responsive on mobile', () => {
    // Mock mobile
    const { container } = render(Stats, { props: { locale: 'es' } });
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('grid-cols-1');
  });
});
```

### SEO
- [ ] Stats are readable (not just visual)

### ACCESSIBILITY
- [ ] aria-label on section
- [ ] Numbers are readable by screen readers
- [ ] Color contrast >= 4.5:1 (white on teal)

### PERFORMANCE
- LCP: No
- Animation: CSS-based number counter (JavaScript to update value)

---

## COMPONENTE: CaseStudies.astro

### DESCRIPCIÓN
Carousel de 4 case studies (Famba, Analysta, Innocard, NewsUp). Cada item muestra: imagen, nombre proyecto, descripción, CTA "Ver proyecto". Responsive con imagen optimizada.

### REQUISITOS FUNCIONALES
- Req 1: Mostrar 4 case studies en carousel
- Req 2: Cada item: imagen (left), content (right) en desktop; stacked en mobile
- Req 3: Navegación prev/next + dots
- Req 4: Imágenes optimizadas (WebP, lazy load)
- Req 5: Responsive: 1→2→1 items visible

### REQUISITOS TÉCNICOS
**i18n**:
- es.ts: `caseStudies.items[].title, caseStudies.items[].description, caseStudies.items[].cta`
- en.ts: Same

**Responsive**:
- Mobile (<640px): 1 item visible (full width, stacked layout)
- Tablet (640-1024px): 2 items visible (side-by-side)
- Desktop (>1024px): 1 item visible (large, side-by-side layout)

**SEO**:
- Heading: H2
- Image alt texts: "[Project name] case study screenshot"
- Lazy load: YES (non-critical images)
- Schema: Could add Case Study schema but not required

**Accessibility**:
- aria-label="Case studies carousel"
- role="region"
- All images have alt text
- CTA buttons accessible

### ESTRUCTURA LAYOUT

```
## Desktop
<section>
  <h2>Casos de Éxito</h2>
  <div class="carousel">
    <div class="carousel-item grid grid-cols-2">
      <div><Image src=... /></div>
      <div>
        <h3>Famba</h3>
        <p>Description...</p>
        <a href="#" class="cta">Conoce Famba</a>
      </div>
    </div>
  </div>
  [Prev][Dots][Next]
</section>

## Mobile
<section>
  <h2>Casos de Éxito</h2>
  <div class="carousel">
    <div class="carousel-item grid grid-cols-1">
      <div><Image src=... /></div>
      <div>
        <h3>Famba</h3>
        <p>Description...</p>
        <a href="#" class="cta">Conoce Famba</a>
      </div>
    </div>
  </div>
  [Prev][Dots][Next]
</section>
```

### TYPESCRIPT INTERFACE

```typescript
interface CaseStudyItem {
  id: string;
  title: string;
  description: string;
  image: string; // image path
  cta: string; // button text
  ctaHref: string;
}

interface Props {
  locale: Locale;
}
```

### ESCENARIOS

**Scenario 1: Navigate carousel**
- Given: Case study 1 visible
- When: User clicks "next"
- Then: Carousel transitions to case study 2

**Scenario 2: Image loads lazily**
- Given: User at top of page (not scrolled to case studies)
- When: Page loads
- Then: Case study images NOT loaded yet

**Scenario 3: Responsive layout**
- Given: Mobile viewport
- When: Page loads
- Then: Case study shows stacked (image above content)

### EDGE CASES
- Very long project description: truncate with "..." or allow overflow?
- Image doesn't load: show placeholder + alt text visible

### TEST STRUCTURE

```typescript
describe('CaseStudies', () => {
  test('renders carousel with 4 items', () => {
    const { container } = render(CaseStudies, { props: { locale: 'es' } });
    expect(container.querySelectorAll('.carousel-item')).toHaveLength(4);
  });

  test('images have alt text', () => {
    const { container } = render(CaseStudies, { props: { locale: 'es' } });
    const images = container.querySelectorAll('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('alt');
    });
  });

  test('has lazy loading', () => {
    const { container } = render(CaseStudies, { props: { locale: 'es' } });
    const images = container.querySelectorAll('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });

  test('is responsive on mobile', () => {
    // Mock mobile
    const { container } = render(CaseStudies, { props: { locale: 'es' } });
    const layout = container.querySelector('.grid');
    expect(layout).toHaveClass('grid-cols-1');
  });
});
```

### SEO
- [ ] H2 heading present
- [ ] All images have descriptive alt text
- [ ] Lazy loading enabled
- [ ] CTA links have descriptive text

### ACCESSIBILITY
- [ ] Images have alt text
- [ ] aria-label on carousel region
- [ ] CTA buttons accessible (keyboard nav)
- [ ] Color contrast >= 4.5:1

### PERFORMANCE
- LCP: No (below fold)
- Images: Lazy load (YES)
- WebP format: YES (Astro Image default)

---

# PHASE 3: Social Proof

## COMPONENTE: Testimonials.astro

### DESCRIPCIÓN
Carousel de testimonios de clientes (3 items: Jose Muñoz, Pol Margaix, Gerard Gil). Cada item muestra: foto, nombre, rol, calificación (5 stars), cita/quote.

### REQUISITOS FUNCIONALES
- Req 1: Mostrar carousel de testimonios
- Req 2: Cada item: foto + nombre + rol + 5-star rating + quote
- Req 3: Imágenes optimizadas, lazy loaded
- Req 4: Navegación prev/next + dots
- Req 5: Responsive (1 item mobile, 3 items desktop)

### REQUISITOS TÉCNICOS
**i18n**:
- es.ts: `testimonials.items[].name, .role, .quote`
- en.ts: Same

**Responsive**:
- Mobile (<640px): 1 item visible
- Desktop (>1024px): 3 items visible

**SEO**:
- Heading: H2
- Image alt: "[Name] testimonial photo"
- Lazy load: YES
- Schema: Review schema for each testimonial (optional but good for SEO)

**Accessibility**:
- aria-label on carousel
- role="region"
- Star rating: aria-label="5 out of 5 stars"
- Images have alt text

### ESTRUCTURA LAYOUT

```
<section>
  <h2>Lo que dicen nuestros clientes</h2>
  <div class="carousel grid grid-cols-3 max-md:grid-cols-1">
    <div class="card bg-white p-6 rounded">
      <img src="photo" alt="[Name]" class="w-20 h-20 rounded-full" />
      <h3>{name}</h3>
      <p class="text-sm text-gray-600">{role}</p>
      <div class="stars" aria-label="5 out of 5 stars">
        ⭐⭐⭐⭐⭐
      </div>
      <p class="quote italic">{quote}</p>
    </div>
  </div>
  [Prev][Dots][Next]
</section>
```

### TYPESCRIPT INTERFACE

```typescript
interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  photo: string;
  rating: number; // 1-5
  quote: string;
}

interface Props {
  locale: Locale;
}
```

### ESCENARIOS

**Scenario 1: Display testimonial**
- Given: Carousel loaded
- When: Testimonial visible
- Then: Photo, name, role, stars, quote all displayed

**Scenario 2: Carousel navigation**
- Given: Testimonial 1 visible
- When: User clicks next
- Then: Testimonial 2 displays with transition

**Scenario 3: Image lazy loading**
- Given: User hasn't scrolled to testimonials
- When: Page loads
- Then: Testimonial photos not loaded yet

### TEST STRUCTURE

```typescript
describe('Testimonials', () => {
  test('renders 3 testimonials', () => {
    const { container } = render(Testimonials, { props: { locale: 'es' } });
    expect(container.querySelectorAll('.carousel-item')).toHaveLength(3);
  });

  test('displays star ratings', () => {
    const { container } = render(Testimonials, { props: { locale: 'es' } });
    const ratings = container.querySelectorAll('[aria-label*="star"]');
    expect(ratings.length).toBeGreaterThan(0);
  });

  test('images are lazy loaded', () => {
    const { container } = render(Testimonials, { props: { locale: 'es' } });
    const images = container.querySelectorAll('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });
});
```

### SEO
- [ ] H2 heading
- [ ] Images have alt text
- [ ] Lazy loading enabled
- [ ] Review schema (optional)

### ACCESSIBILITY
- [ ] Images have alt text
- [ ] Star ratings have aria-label
- [ ] aria-label on carousel
- [ ] Color contrast >= 4.5:1

### PERFORMANCE
- LCP: No
- Images: Lazy load (YES)

---

## COMPONENTE: Team.astro

### DESCRIPCIÓN
Grid de 6 miembros del equipo. Cada card muestra: foto, nombre, rol, enlace LinkedIn.

### REQUISITOS FUNCIONALES
- Req 1: Mostrar 6 team members en grid responsive
- Req 2: Cada card: foto + nombre + rol + social links
- Req 3: Imágenes optimizadas, lazy loaded
- Req 4: Responsive (2→3→4 columns)

### REQUISITOS TÉCNICOS
**i18n**:
- es.ts: `team.items[].name, .role`
- en.ts: Same

**Responsive**:
- Mobile (<640px): 2 columns
- Tablet (640-1024px): 3 columns
- Desktop (>1024px): 4 columns (2 rows of 3)

**SEO**:
- Heading: H2
- Image alt: "[Name] team member photo"
- Lazy load: YES
- Schema: Person schema for each team member (optional)

**Accessibility**:
- Images have alt text
- Social links have aria-label
- focus visible on all links

### ESTRUCTURA LAYOUT

```
<section>
  <h2>Conoce a nuestro equipo</h2>
  <div class="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-6">
    <div class="card">
      <img src="photo" alt="[Name]" class="w-full h-64 object-cover rounded" />
      <h3>{name}</h3>
      <p class="text-sm text-gray-600">{role}</p>
      <div class="socials">
        <a href="#" aria-label="[Name] LinkedIn">
          <LinkedIn icon />
        </a>
      </div>
    </div>
    ... (repeat 6 times)
  </div>
</section>
```

### TYPESCRIPT INTERFACE

```typescript
interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
}

interface Props {
  locale: Locale;
}
```

### ESCENARIOS

**Scenario 1: Display team grid**
- Given: Page loads
- When: Team section visible
- Then: 6 members show in responsive grid

**Scenario 2: Image lazy loading**
- Given: User hasn't scrolled to team
- When: Page loads
- Then: Team photos not loaded

**Scenario 3: Social links accessible**
- Given: User with keyboard only
- When: User tabs to social link
- Then: Link is focusable and has aria-label

### TEST STRUCTURE

```typescript
describe('Team', () => {
  test('renders 6 team members', () => {
    const { container } = render(Team, { props: { locale: 'es' } });
    expect(container.querySelectorAll('.team-card')).toHaveLength(6);
  });

  test('displays member names and roles', () => {
    const { container } = render(Team, { props: { locale: 'es' } });
    expect(container).toHaveTextContent('Rubén Sahagún');
    expect(container).toHaveTextContent('CEO / CTO');
  });

  test('images lazy loaded', () => {
    const { container } = render(Team, { props: { locale: 'es' } });
    const images = container.querySelectorAll('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });

  test('is responsive grid', () => {
    // Test grid columns at different viewports
  });
});
```

### SEO
- [ ] H2 heading
- [ ] Images have alt text
- [ ] Lazy loading
- [ ] Social links have descriptive hrefs

### ACCESSIBILITY
- [ ] Images have alt text
- [ ] Social links have aria-labels
- [ ] Color contrast >= 4.5:1

### PERFORMANCE
- LCP: No
- Images: Lazy load (YES)

---

## COMPONENTE: SocialLinks.astro

### DESCRIPCIÓN
Componente reutilizable para mostrar enlaces de redes sociales (LinkedIn, GitHub, Twitter, etc.). Usado en Team cards, Footer, etc.

### REQUISITOS FUNCIONALES
- Req 1: Mostrar iconos de redes sociales
- Req 2: Links clickeables a perfiles
- Req 3: Configurable (qué redes mostrar)
- Req 4: Icons inline o links solo

### TYPESCRIPT INTERFACE

```typescript
interface Props {
  links: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  size?: 'sm' | 'md' | 'lg'; // icon size
  label?: string; // aria-label prefix
}
```

### ACCESIBILIDAD
- [ ] aria-label per link: "Visit [Name] on LinkedIn"
- [ ] Proper focus visible

---

# PHASE 4: Conversion

## COMPONENTE: Contact.astro

### DESCRIPCIÓN
Formulario de contacto con campos: nombre, email, mensaje. Validación client-side, submit handler, i18n completo.

### REQUISITOS FUNCIONALES
- Req 1: Campos: nombre, email, mensaje (required)
- Req 2: Validación client-side (required, email format)
- Req 3: Submit handler (console.log or API endpoint)
- Req 4: Error messages en español/inglés
- Req 5: Success message después de submit

### REQUISITOS TÉCNICOS
**i18n**:
- es.ts: `contact.headline, contact.form.name, contact.form.email, contact.form.message, contact.form.submit, contact.errors.required, contact.errors.invalidEmail`
- en.ts: Same

**Responsive**:
- Mobile: Full width form
- Desktop: Max-width container centered

**SEO**:
- Heading: H2
- Form accessible (labels associated with inputs)
- No schema needed

**Accessibility**:
- <label> for each input (aria-labelledby)
- aria-invalid + aria-describedby for error states
- Error messages linked to fields
- Submit button accessible
- Keyboard navigation: Tab through all fields

### ESTRUCTURA LAYOUT

```
<section>
  <h2>¿Tienes algún proyecto en mente?</h2>
  <form>
    <div class="form-group">
      <label for="name">Nombre</label>
      <input type="text" id="name" name="name" required />
      <span class="error" aria-live="polite"></span>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />
      <span class="error" aria-live="polite"></span>
    </div>
    <div class="form-group">
      <label for="message">Cuéntanos sobre tu proyecto</label>
      <textarea id="message" name="message" required></textarea>
      <span class="error" aria-live="polite"></span>
    </div>
    <button type="submit">Enviar</button>
  </form>
</section>
```

### TYPESCRIPT INTERFACE

```typescript
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Props {
  locale: Locale;
}
```

### ESCENARIOS

**Scenario 1: Validate email on blur**
- Given: User enters invalid email
- When: User leaves email field (blur)
- Then: Error message appears

**Scenario 2: Submit with validation**
- Given: All fields filled correctly
- When: User clicks submit
- Then: Form submits, success message shows

**Scenario 3: Required field validation**
- Given: Name field is empty
- When: User clicks submit
- Then: Error "El nombre es requerido" appears

**Scenario 4: Form reset after success**
- Given: Form submitted successfully
- When: Success message displayed
- Then: Form fields cleared (optional)

### TEST STRUCTURE

```typescript
describe('Contact', () => {
  test('renders form with 3 fields', () => {
    const { container } = render(Contact, { props: { locale: 'es' } });
    expect(container.querySelectorAll('input, textarea')).toHaveLength(3);
  });

  test('validates email format', async () => {
    const { container } = render(Contact, { props: { locale: 'es' } });
    const emailInput = container.querySelector('#email');
    emailInput.value = 'invalid-email';
    emailInput.dispatchEvent(new Event('blur'));
    // Assert error message appears
  });

  test('shows required field error', async () => {
    const { container } = render(Contact, { props: { locale: 'es' } });
    const form = container.querySelector('form');
    const submitBtn = container.querySelector('button[type="submit"]');
    await submitBtn.click();
    expect(container).toHaveTextContent('requerido');
  });

  test('has proper form labels', () => {
    const { container } = render(Contact, { props: { locale: 'es' } });
    expect(container.querySelector('label[for="name"]')).toBeInTheDocument();
    expect(container.querySelector('label[for="email"]')).toBeInTheDocument();
  });
});
```

### SEO
- [ ] H2 heading present
- [ ] Form labels properly associated (<label for="">)

### ACCESSIBILITY
- [ ] All inputs have associated labels
- [ ] aria-invalid on invalid fields
- [ ] aria-describedby linking fields to error messages
- [ ] Error messages use aria-live="polite"
- [ ] Color contrast >= 4.5:1
- [ ] Focus visible on all controls

### PERFORMANCE
- LCP: No
- No large payloads (client-side validation only)

---

## COMPONENTE: Footer.astro

### DESCRIPCIÓN
Footer con navegación, enlaces sociales, copyright. Responsive y con SEO básico (internal links, schema).

### REQUISITOS FUNCIONALES
- Req 1: Mostrar navegación (About, Services, Contact)
- Req 2: Social links (LinkedIn)
- Req 3: Copyright + year
- Req 4: Responsive layout (stacked en mobile)

### REQUISITOS TÉCNICOS
**i18n**:
- es.ts: `footer.nav.about, footer.nav.services, footer.nav.contact, footer.copyright`
- en.ts: Same

**Responsive**:
- Mobile: Stack all sections vertically
- Desktop: Flex row with spacing

**SEO**:
- Internal links to main sections
- Schema: Organization schema (name, social profiles, contact)
- No images

**Accessibility**:
- nav role on main navigation
- Links properly labeled
- Color contrast >= 4.5:1

### ESTRUCTURA LAYOUT

```
<footer class="bg-dark">
  <div class="max-w-container mx-auto px-6 py-12">
    <div class="grid grid-cols-3 max-md:grid-cols-1 gap-8">
      <!-- About -->
      <div>
        <h3>Nimbel Code</h3>
        <p>Short description</p>
      </div>
      
      <!-- Navigation -->
      <nav>
        <h4>Navegación</h4>
        <ul>
          <li><a href="#about">Sobre nosotros</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      
      <!-- Social -->
      <div>
        <h4>Síguenos</h4>
        <SocialLinks ... />
      </div>
    </div>
    
    <div class="border-t mt-8 pt-8 text-center text-sm text-gray-400">
      © 2026 Nimbel Code. Todos los derechos reservados.
    </div>
  </div>
</footer>
```

### TYPESCRIPT INTERFACE

```typescript
interface Props {
  locale: Locale;
}
```

### TEST STRUCTURE

```typescript
describe('Footer', () => {
  test('renders navigation links', () => {
    const { container } = render(Footer, { props: { locale: 'es' } });
    expect(container).toHaveTextContent('Sobre nosotros');
    expect(container).toHaveTextContent('Servicios');
  });

  test('displays copyright year', () => {
    const { container } = render(Footer, { props: { locale: 'es' } });
    expect(container).toHaveTextContent('2026');
  });

  test('is responsive on mobile', () => {
    // Mock mobile viewport
    const { container } = render(Footer, { props: { locale: 'es' } });
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('grid-cols-1');
  });
});
```

### SEO
- [ ] Internal nav links to main sections
- [ ] Organization schema in Layout
- [ ] Proper heading hierarchy

### ACCESSIBILITY
- [ ] nav role on navigation
- [ ] Links properly labeled
- [ ] Color contrast >= 4.5:1
- [ ] Footer at end of page (semantic position)

### PERFORMANCE
- LCP: No

---

# NOTAS GENERALES

## i18n Key Structure
Todos los archivos i18n (es.ts, en.ts) deben seguir esta estructura:

```typescript
export const es = {
  meta: { ... },
  navbar: { ... },
  hero: { ... },
  clients: { headline: "..." },
  services: {
    headline: "...",
    items: [
      { title: "...", shortDesc: "...", fullDesc: "..." },
      ...
    ]
  },
  stats: {
    items: [
      { value: 15, label: "Años de experiencia" },
      ...
    ]
  },
  caseStudies: {
    headline: "...",
    items: [...]
  },
  testimonials: {
    headline: "...",
    items: [...]
  },
  team: {
    headline: "...",
    items: [...]
  },
  contact: {
    headline: "...",
    form: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      submit: "Enviar"
    },
    errors: {
      required: "Este campo es requerido",
      invalidEmail: "Email inválido"
    }
  },
  footer: {
    nav: { ... },
    copyright: "© 2026 Nimbel Code"
  }
} as const;
```

## Responsive Tailwind Breakpoints
- sm: 640px (mobile)
- md: 768px (tablet)
- lg: 1024px (desktop)
- xl: 1280px (large desktop)

Classes:
- `max-sm:` (< 640px)
- `max-md:` (< 768px)
- `max-lg:` (< 1024px)
- `md:` (>= 768px)
- `lg:` (>= 1024px)

## Accessibility Checklist (All Components)
- [ ] Heading hierarchy correct (H1, H2, H3...)
- [ ] WCAG 2.1 AA color contrast (4.5:1 for text, 3:1 for graphics)
- [ ] All images have descriptive alt text
- [ ] Form inputs have associated <label> elements
- [ ] aria-labels on interactive elements
- [ ] Focus visible on all focusable elements
- [ ] Keyboard navigation: Tab, Enter, Escape, Arrow keys
- [ ] Semantic HTML: <button>, <nav>, <section>, <article>
- [ ] aria-live="polite" for dynamic content updates
- [ ] aria-expanded for expandable content
- [ ] Role attributes where needed (role="button" for divs that act like buttons)

## SEO Checklist (All Sections)
- [ ] H2 or H3 heading for section
- [ ] Meta description in Layout (if section-specific)
- [ ] Image alt texts descriptive (not just "image")
- [ ] Lazy loading on non-critical images
- [ ] Schema markup: Service, Review, Organization, Person (as applicable)
- [ ] Internal links use descriptive anchor text
- [ ] No broken links
- [ ] Mobile-friendly design (responsive)

## Performance Checklist
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] Lighthouse mobile > 90
- [ ] Lighthouse desktop > 95
- [ ] Images optimized (WebP + fallback)
- [ ] Lazy loading on below-fold images
- [ ] No large JavaScript payloads
- [ ] CSS animations only (no JS-driven animations)

---

**Status**: Ready for Phase Implementation  
**Created**: 2026-04-16  
**Updated**: [As specs are refined]
