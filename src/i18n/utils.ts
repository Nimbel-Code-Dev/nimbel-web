import { es } from './es';
import { en } from './en';

export type Locale = 'es' | 'en';
export type Translations = typeof es;

const translations = { es, en } as const;

export function useTranslations(locale: Locale) {
  const dict = translations[locale];

  return function t<
    S extends keyof Translations,
    K extends keyof Translations[S],
  >(section: S, key: K): Translations[S][K] {
    // @ts-expect-error - Todas las traducciones tienen la misma estructura
    return dict[section][key];
  };
}
