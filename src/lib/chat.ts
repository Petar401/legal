// Data for the help chat. Built per language, so the chat can read and answer in any of them.
import { allDicts, localeInfo, localePath, type Locale } from '../i18n';
import { addressLine, hasEmail, site, whatsappLink } from '../config/site';

// {address} in an answer is replaced here. The isolate marks keep the address left-to-right inside Sorani text.
const fill = (text: string) => text.replaceAll('{address}', `⁦${addressLine}⁩`).replaceAll('{phone}', `⁦${site.phoneDisplay}⁩`);

export function chatBundle(l: Locale) {
  const t = allDicts[l];
  const info = localeInfo[l];
  return {
    lang: info.htmlLang,
    dir: info.dir,
    ui: {
      open: t.bot.open, openLabel: t.bot.openLabel, title: t.bot.title, note: t.bot.note, hello: t.bot.hello,
      placeholder: t.bot.placeholder, send: t.bot.send, close: t.bot.close, chips: t.bot.chips,
    },
    fallback: t.bot.fallback,
    readMore: t.cta.readMore,
    contactPrompt: t.bot.contactPrompt,
    contact: localePath(l, 'contact'),
    whatsapp: whatsappLink(t.contact.waPrefill),
    whatsappLabel: t.cta.whatsapp,
    email: hasEmail ? `mailto:${site.email}` : '',
    emailLabel: t.cta.email,
    you: t.bot.youSaid,
    bot: t.bot.botName,
    intents: t.bot.intents.map((it) => ({
      id: it.id,
      answer: fill(it.answer),
      link: it.link ? localePath(l, it.link) : '',
      keywords: it.keywords,
    })),
  };
}

export type ChatBundle = ReturnType<typeof chatBundle>;
