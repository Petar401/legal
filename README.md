# Advice4you website

The website for Advice4you, a Norwich service that gives newcomers practical help with benefits, the council, the NHS, letters and forms.

It is a static site built with [Astro](https://astro.build). It is available in six languages: English, Bulgarian, Romanian, Turkish, Kurdish Kurmanji and Kurdish Sorani (right to left).

## Before going live: fill in these details

| What | Where |
| --- | --- |
| Email, phone, WhatsApp number | `src/config/site.ts` |
| Your own domain | `src/config/site.ts`, `astro.config.mjs` (`SITE`) and `public/robots.txt` |

Also check that these statements describe how you work. They appear on the site:

- "Contacting us is free. Before we start any paid work, we tell you the price."
- "With your permission, we can speak to an office for you."
- Which languages you can actually speak with clients. The site only promises that the *website* is in six languages.

## Commands

```bash
npm install
npm run dev        # local development at http://localhost:4321
npm run build      # content check + production build into dist/
npm run preview    # serve the built site
npx playwright test  # accessibility (axe) and behaviour tests
```

`npm run build` runs `scripts/lint-content.mjs` first. The build stops if any language has:
- an em dash or en dash
- a common machine-written phrase (English)
- missing or extra keys compared with English
- wrong letters for the script (Romanian ş/ţ, Arabic ي/ك in Sorani, Turkish ı/ğ in Kurmanji)

## Where things live

- `src/i18n/en.ts`: all English copy. The other language files mirror it exactly.
- `src/content/blog/<lang>/`: journal articles, one Markdown file per language.
- `src/views/`: page layouts. `src/pages/[...path].astro` builds every page in every language.
- `src/components/Chatbot.astro`: the help chat. It needs no API and matches keywords from the language files.
- `src/components/CookieBanner.astro`: cookie consent. Today the site stores only essential settings. Any future analytics must wait for `window.a4yConsent === 'accepted'`.
- `src/config/photos.ts`: photos served from the Unsplash CDN, with credits on the accessibility page.
- `scripts/make-icons.mjs`: regenerates favicons and the social share image from `public/logo.svg`.

## Legal note

Advice4you is not registered with the Immigration Advice Authority. The site never offers immigration advice and sends people to regulated advisers instead. Keep it that way unless you become registered.
