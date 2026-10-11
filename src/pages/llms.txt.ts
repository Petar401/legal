// llms.txt: a plain summary for AI assistants and answer engines. Built from the site's own data,
// so the address, phone number and page list never drift out of date.
import type { APIRoute } from 'astro';
import { allDicts, locales, localeInfo, localePath } from '../i18n';
import { site, addressLine, hasEmail } from '../config/site';

const en = allDicts.en;
const abs = (l: (typeof locales)[number], path = '') => site.url + localePath(l, path);

export const GET: APIRoute = () => {
  const lines = [
    `# ${site.name}`,
    '',
    `> ${en.meta.defaultDescription}`,
    '',
    `${site.name} is a small, independent help service in ${site.area}. It helps newcomers with benefits, the council, the NHS, letters, forms and phone calls, in simple words. It is not a law firm, it is not regulated to give immigration advice, and it is not an emergency service.`,
    '',
    '## Contact',
    '',
    `- Address: ${addressLine}, United Kingdom`,
    `- Phone and WhatsApp: ${site.phoneIntl}`,
    ...(hasEmail ? [`- Email: ${site.email}`] : []),
    `- Area served: Norwich and Norfolk`,
    `- Website languages: ${locales.map((l) => localeInfo[l].english).join(', ')}`,
    '',
    '## Pages (English)',
    '',
    `- [Home](${abs('en')}): ${en.home.description}`,
    `- [Services](${abs('en', 'services')}): ${en.services.description}`,
    `- [How it works](${abs('en', 'how-it-works')}): ${en.how.description}`,
    `- [About](${abs('en', 'about')}): ${en.about.description}`,
    `- [Questions and answers](${abs('en', 'faq')}): ${en.faq.description}`,
    `- [Contact](${abs('en', 'contact')}): ${en.contact.description}`,
    `- [Journal](${abs('en', 'blog')}): ${en.blog.description}`,
    '',
    '## Other languages',
    '',
    ...locales.filter((l) => l !== 'en').map((l) => `- [${localeInfo[l].english}](${abs(l)})`),
    '',
    '## Optional',
    '',
    `- [Sitemap](${site.url}/sitemap-index.xml)`,
    '',
  ].join('\n');
  return new Response(lines, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
