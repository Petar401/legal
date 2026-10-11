import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Keep in sync with src/config/site.ts
const SITE = 'https://advice4you.vercel.app';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-GB', bg: 'bg', ro: 'ro', tr: 'tr', ku: 'ku', ckb: 'ckb' },
      },
    }),
  ],
});
