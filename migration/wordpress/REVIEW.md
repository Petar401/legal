# Items to review before launch

- **Terms (all languages):** the "automatic helper" section is dropped because the
  chat helper is not migrated. Re-add it if the helper is rebuilt.
- **Privacy and Cookie policy:** text says the browser stores a language choice and a
  cookie choice. On WordPress.com, Polylang sets its own language cookie and WordPress.com
  may set others. Have the owner confirm the wording; it was copied unchanged.
- **Placeholders still empty in `src/config/site.ts`:** email, postcode, opening hours,
  real domain. They are left out of the migrated pages, not invented.
- **Legal pages date:** "Last updated 2026-10-11" copied from the Astro site.
- **Translations** are copied as-is; `scripts/lint-content.mjs` rules still apply to the source.
- **SEO:** page titles/descriptions are exported (`seoTitle`, `description`) and need an SEO
  plugin or the plan's SEO tools to be applied. JSON-LD is not exported yet.
