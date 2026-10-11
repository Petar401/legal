// Structured data builders (schema.org JSON-LD). Everything here is derived from src/config/site.ts,
// so a changed phone number, address or domain updates every page at once.
import { site, hasEmail, mapsUrl } from '../config/site';
import { locales, localeInfo, localePath, type Locale } from '../i18n';

const ctx = 'https://schema.org';
export const ids = {
  org: `${site.url}/#organisation`,
  website: `${site.url}/#website`,
};

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: site.address.street,
  addressLocality: site.address.locality,
  addressRegion: site.address.region,
  ...(site.address.postcode ? { postalCode: site.address.postcode } : {}),
  addressCountry: site.address.country,
};

export function organisation(description: string) {
  return {
    '@context': ctx,
    '@type': 'ProfessionalService',
    '@id': ids.org,
    name: site.name,
    // Constant across languages: one organisation, one canonical URL
    url: `${site.url}/`,
    logo: `${site.url}/icon-512.png`,
    image: `${site.url}/og/advice4you.jpg`,
    description,
    telephone: site.phoneIntl,
    ...(hasEmail ? { email: site.email } : {}),
    address: postalAddress,
    hasMap: mapsUrl,
    areaServed: [
      { '@type': 'City', name: 'Norwich' },
      { '@type': 'AdministrativeArea', name: 'Norfolk' },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: site.phoneIntl,
        ...(hasEmail ? { email: site.email } : {}),
        areaServed: 'GB',
        availableLanguage: locales.map((l) => localeInfo[l].english),
      },
    ],
    knowsLanguage: locales.map((l) => localeInfo[l].hreflang),
    ...(site.hours.length
      ? {
          openingHoursSpecification: site.hours.map((h) => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: h.days,
            opens: h.opens,
            closes: h.closes,
          })),
        }
      : {}),
  };
}

export function website() {
  return {
    '@context': ctx,
    '@type': 'WebSite',
    '@id': ids.website,
    url: `${site.url}/`,
    name: site.name,
    inLanguage: locales.map((l) => localeInfo[l].htmlLang),
    publisher: { '@id': ids.org },
  };
}

export function webPage(locale: Locale, path: string, name: string, description: string) {
  const url = site.url + localePath(locale, path);
  return {
    '@context': ctx,
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: localeInfo[locale].htmlLang,
    isPartOf: { '@id': ids.website },
    about: { '@id': ids.org },
  };
}

export function breadcrumbs(items: { name: string; url: string }[]) {
  return {
    '@context': ctx,
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  };
}
