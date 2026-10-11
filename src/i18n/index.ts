import en, { type Dict } from './en';
import { locales, localeInfo, localePath, type Locale } from './locales';

export * from './locales';
export type { Dict };

const modules = import.meta.glob<{ default: Dict }>(['./*.ts', '!./index.ts', '!./locales.ts', '!./en.ts'], { eager: true });

const dicts = Object.fromEntries(
  locales.map((l) => [l, l === 'en' ? en : modules[`./${l}.ts`]?.default ?? en]),
) as Record<Locale, Dict>;

export const getDict = (locale: Locale): Dict => dicts[locale];
export const allDicts = dicts;

/** Format a date in the locale's own style. */
export function formatDate(date: Date, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(localeInfo[locale].htmlLang, { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
  } catch {
    return date.toISOString().slice(0, 10);
  }
}

export { localePath };
