import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site.ts';

export default defineConfig({
  // One source of truth: src/config/site.ts
  site: site.url,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-GB', bg: 'bg', ro: 'ro', tr: 'tr', ku: 'ku', ckb: 'ckb' },
      },
    }),
  ],
});
