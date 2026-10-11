export const locales = ['en', 'bg', 'ro', 'tr', 'ku', 'ckb'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeInfo: Record<Locale, {
  name: string;      // name in its own language
  variant?: string;  // script or dialect label
  english: string;   // name in English, for screen readers and aria labels
  htmlLang: string;
  hreflang: string;
  ogLocale: string;
  dir: 'ltr' | 'rtl';
  flag: 'gb' | 'bg' | 'ro' | 'tr' | 'kurdistan';
}> = {
  en: { name: 'English', english: 'English', htmlLang: 'en-GB', hreflang: 'en-GB', ogLocale: 'en_GB', dir: 'ltr', flag: 'gb' },
  bg: { name: 'Български', english: 'Bulgarian', htmlLang: 'bg', hreflang: 'bg', ogLocale: 'bg_BG', dir: 'ltr', flag: 'bg' },
  ro: { name: 'Română', english: 'Romanian', htmlLang: 'ro', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', flag: 'ro' },
  tr: { name: 'Türkçe', english: 'Turkish', htmlLang: 'tr', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', flag: 'tr' },
  ku: { name: 'Kurdî', variant: 'Kurmancî', english: 'Kurdish (Kurmanji)', htmlLang: 'ku', hreflang: 'ku', ogLocale: 'ku_TR', dir: 'ltr', flag: 'kurdistan' },
  ckb: { name: 'کوردی', variant: 'سۆرانی', english: 'Kurdish (Sorani)', htmlLang: 'ckb', hreflang: 'ckb', ogLocale: 'ckb_IQ', dir: 'rtl', flag: 'kurdistan' },
};

export const pageKeys = ['', 'services', 'how-it-works', 'about', 'faq', 'contact', 'blog', 'privacy', 'cookies', 'terms', 'accessibility'] as const;
export type PageKey = (typeof pageKeys)[number];

/** Build a URL for a page in a locale. English lives at the root. */
export function localePath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  return `${prefix}/${clean}${clean ? '/' : ''}`.replace(/\/+/g, '/');
}

/** Strip the locale prefix from a pathname, giving the shared page path. */
export function stripLocale(pathname: string): { locale: Locale; path: string } {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && (locales as readonly string[]).includes(parts[0]) && parts[0] !== defaultLocale) {
    return { locale: parts[0] as Locale, path: parts.slice(1).join('/') };
  }
  return { locale: defaultLocale, path: parts.join('/') };
}
