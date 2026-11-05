# Advice4you → WordPress.com migration

Content for the WordPress.com site is generated from the Astro source, so the
Astro site stays the single source of truth until cut-over.

## Run order
1. `node --experimental-strip-types migration/wordpress/scripts/export-content.mjs`
   Reads `src/i18n/*.ts`, `src/config/*.ts` and `src/content/blog/*/*.md`.
   Writes `migration/wordpress/build/<lang>/<page>.json` (title, SEO title,
   description, block markup) and `_chrome.json` (nav/footer strings per language).
2. Upload the six photos to the WordPress media library, save the result as
   `migration/wordpress/media-map.json` (`{ "skyline": { "url": "...", "id": 1 } }`)
   and re-run step 1 so pages use library images instead of Unsplash hotlinks.
3. Import with the WordPress.com tools (pages, posts, Polylang language + translation links).

Languages: `en` (default, no prefix), `bg`, `ro`, `tr`, `ku` (Kurmanji), `ckb` (Sorani, RTL).
Same URLs as the Astro site: `/services/`, `/bg/services/`, ...

## Not migrated (see REVIEW.md)
Chat helper, cookie banner, 404 language switching, greeting animation,
scroll-reveal, `robots.txt`/`llms.txt`, Vercel security headers/CSP.
