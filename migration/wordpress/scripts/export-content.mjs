#!/usr/bin/env node
// Exports the Advice4you site into WordPress block markup, one JSON file per page/post/language.
//   node --experimental-strip-types migration/wordpress/scripts/export-content.mjs
// Output: migration/wordpress/build/<lang>/<key>.json  (+ _chrome.json with nav/footer strings)
// Optional: migration/wordpress/media-map.json  { "skyline": { "url": "...", "id": 123 }, ... }
//   When present, photo URLs/ids come from the WordPress media library instead of Unsplash.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const out = join(root, 'migration', 'wordpress', 'build');
const LANGS = ['en', 'bg', 'ro', 'tr', 'ku', 'ckb'];
const UPDATED = '2026-10-11';

const imp = (rel) => import(pathToFileURL(join(root, rel)).href).then((m) => m.default ?? m);
const dicts = Object.fromEntries(await Promise.all(LANGS.map(async (l) => [l, await imp(`src/i18n/${l}.ts`)])));
const { site } = await import(pathToFileURL(join(root, 'src/config/site.ts')).href);
const { photos } = await import(pathToFileURL(join(root, 'src/config/photos.ts')).href);
const { localeInfo } = await import(pathToFileURL(join(root, 'src/i18n/locales.ts')).href);

const mediaMapPath = join(root, 'migration', 'wordpress', 'media-map.json');
const mediaMap = existsSync(mediaMapPath) ? JSON.parse(readFileSync(mediaMapPath, 'utf8')) : {};

// ---- colours (from src/styles/global.css) ----
const C = { midnight: '#04070f', midnight800: '#0b1530', silver100: '#e8ecf2', silver300: '#bcc3d0', ivory: '#f6f3ec', ivory2: '#efeadf', ink: '#0e1424' };

// ---- helpers ----
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
/** **bold** and [text](url) only, same as src/lib/rich.ts */
const rich = (s) =>
  esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.+?)\]\((https?:\/\/[^\s)]+|\/[^\s)]*)\)/g, (_m, t, u) => `<a href="${u}"${u.startsWith('http') ? ' rel="noopener" target="_blank"' : ''}>${t}</a>`);
const plain = (s) => s.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\[(.+?)\]\((.+?)\)/g, '$1');
const attrs = (o) => (o && Object.keys(o).length ? ' ' + JSON.stringify(o) : '');
const blk = (name, a, inner = '') => `<!-- wp:${name}${attrs(a)} -->\n${inner}\n<!-- /wp:${name} -->`;

const h = (text, level = 2, extra = {}) => {
  const cls = extra.className ? ` class="wp-block-heading ${extra.className}"` : ' class="wp-block-heading"';
  return blk('heading', { level, ...extra }, `<h${level}${cls}>${rich(text)}</h${level}>`);
};
const p = (text, extra = {}) => blk('paragraph', extra, `<p${extra.className ? ` class="${extra.className}"` : ''}>${rich(text)}</p>`);
const ul = (items) =>
  blk('list', {}, `<ul class="wp-block-list">${items.map((i) => `<li>${rich(i)}</li>`).join('')}</ul>`);
const details = (summary, innerBlocks, open = false) =>
  blk('details', open ? { showContent: true } : {}, `<details class="wp-block-details"${open ? ' open' : ''}><summary>${rich(summary)}</summary>${innerBlocks}</details>`);
const section = (inner, bg, color) =>
  blk('group', {
    align: 'full',
    style: { color: { background: bg, text: color }, spacing: { padding: { top: 'var:preset|spacing|70', bottom: 'var:preset|spacing|70' } } },
    layout: { type: 'constrained' },
  }, `<div class="wp-block-group alignfull has-text-color has-background" style="background-color:${bg};color:${color};padding-top:var(--wp--preset--spacing--70);padding-bottom:var(--wp--preset--spacing--70)">${inner}</div>`);
const buttons = (list) =>
  blk('buttons', {}, `<div class="wp-block-buttons">${list.map(({ label, href, ghost }) =>
    blk('button', ghost ? { className: 'is-style-outline' } : {}, `<div class="wp-block-button${ghost ? ' is-style-outline' : ''}"><a class="wp-block-button__link wp-element-button" href="${esc(href)}">${esc(label)}</a></div>`)).join('\n')}</div>`);
const columns = (cols) =>
  blk('columns', {}, `<div class="wp-block-columns">${cols.map((c) => blk('column', {}, `<div class="wp-block-column">${c}</div>`)).join('\n')}</div>`);
const kicker = (t) => p(t, { className: 'kicker' });
const photo = (key, alt, caption) => {
  const m = mediaMap[key];
  const url = m?.url ?? `${photos[key].src}?auto=format&fit=crop&w=1600&q=72`;
  const idAttr = m?.id ? { id: m.id } : {};
  return blk('image', { ...idAttr, sizeSlug: 'large', linkDestination: 'none' }, `<figure class="wp-block-image size-large"><img src="${url}" alt="${esc(alt)}"${m?.id ? ` class="wp-image-${m.id}"` : ''}/>${caption ? `<figcaption class="wp-element-caption">${esc(caption)}</figcaption>` : ''}</figure>`);
};

const loc = (l, path = '') => {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return `${l === 'en' ? '' : `/${l}`}/${clean}${clean ? '/' : ''}`.replace(/\/+/g, '/');
};
const waHref = (t) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t.contact.waPrefill)}`;
const telHref = `tel:${site.phoneHref}`;
const addressLine = [site.address.street, site.address.locality, site.address.postcode].filter(Boolean).join(', ');
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent([site.address.street, site.address.locality, site.address.postcode, 'UK'].filter(Boolean).join(', '))}`;

const hero = (l, kickerText, title, lead, photoKey, alt, ctas = []) => {
  const m = mediaMap[photoKey];
  const url = m?.url ?? `${photos[photoKey].src}?auto=format&fit=crop&w=2000&q=72`;
  const inner =
    (kickerText ? kicker(kickerText) : '') + h(title, 1) + (lead ? p(lead) : '') + (ctas.length ? buttons(ctas) : '');
  return blk('cover', { url, ...(m?.id ? { id: m.id } : {}), dimRatio: 80, overlayColor: undefined, customOverlayColor: C.midnight, minHeight: 420, align: 'full', alt },
    `<div class="wp-block-cover alignfull" style="min-height:420px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-80 has-background-dim" style="background-color:${C.midnight}"></span><img class="wp-block-cover__image-background" alt="${esc(alt)}" src="${url}" data-object-fit="cover"/><div class="wp-block-cover__inner-container">${inner}</div></div>`);
};
const plainHead = (title, lead, kickerText) =>
  section((kickerText ? kicker(kickerText) : '') + h(title, 1) + (lead ? p(lead) : ''), C.midnight, C.silver100);

// ---- page builders (mirror src/views/*.astro) ----
const pages = {
  '': (l, t) => {
    const x = t.home;
    return [
      hero(l, x.eyebrow, `${x.heroA} ${x.heroB}`, x.heroLead, 'pullsFerry', t.photoAlt.pullsFerry, [
        { label: t.cta.book, href: loc(l, 'contact') },
        { label: t.cta.allServices, href: loc(l, 'services'), ghost: true },
      ]),
      section(kicker(x.introKicker) + h(x.introStatement, 2) + p(x.introBody), C.ivory, C.ink),
      section(kicker(x.servicesKicker) + h(x.servicesTitle) + p(x.servicesLead) +
        t.services.items.map((s) => details(`${s.title}. ${s.short}`, ul(s.points))).join('\n') +
        p(`[${t.cta.allServices}](${loc(l, 'services')})`), C.ivory2, C.ink),
      section(columns([
        photo('letter', t.photoAlt.letter),
        kicker(x.howKicker) + h(x.howTitle) + blk('list', { ordered: true }, `<ol class="wp-block-list">${t.how.steps.map((s) => `<li><strong>${esc(s.title)}.</strong> ${esc(s.text)}</li>`).join('')}</ol>`) +
          buttons([{ label: t.cta.howItWorks, href: loc(l, 'how-it-works'), ghost: true }]),
      ]), C.midnight800, C.silver100),
      section(kicker(x.principlesKicker) + h(x.principlesTitle) + columns(x.principles.map((q) => h(q.title, 3) + p(q.text))), C.ivory, C.ink),
      section(kicker(x.langKicker) + h(x.langTitle) + p(x.langText) +
        ul(LANGS.map((k) => `[${dicts[k].greeting} · ${localeInfo[k].name}${localeInfo[k].variant ? ` (${localeInfo[k].variant})` : ''}](${loc(k)})`)), C.midnight, C.silver100),
      section(kicker(x.faqKicker) + h(x.faqTitle) +
        t.faq.items.slice(1, 5).map((f) => details(f.q, p(f.a))).join('\n') + p(`[${t.cta.allQuestions}](${loc(l, 'faq')})`), C.ivory, C.ink),
      section(h(x.finalTitle) + p(x.finalText) + buttons([{ label: t.cta.whatsappLong, href: waHref(t) }, { label: t.nav.contact, href: loc(l, 'contact'), ghost: true }]), C.midnight800, C.silver100),
    ].join('\n\n');
  },
  services: (l, t) => {
    const x = t.services;
    return [
      hero(l, x.kicker, x.h1, x.lead, 'broads', t.photoAlt.broads),
      section(x.items.map((s) => h(s.title, 2) + p(s.short) + ul(s.points)).join('\n') + h(x.limitsTitle, 2) + p(x.limitsText), C.ivory, C.ink),
      ctaBand(l, t),
    ].join('\n\n');
  },
  'how-it-works': (l, t) => {
    const x = t.how;
    return [
      plainHead(x.h1, x.lead, x.kicker),
      section(blk('list', { ordered: true }, `<ol class="wp-block-list">${x.steps.map((s) => `<li><strong>${esc(s.title)}.</strong> ${esc(s.text)}</li>`).join('')}</ol>`) +
        h(x.bringTitle) + ul(x.bringItems) + h(x.costTitle) + p(x.costText), C.ivory, C.ink),
      ctaBand(l, t),
    ].join('\n\n');
  },
  about: (l, t) => {
    const x = t.about;
    return [
      hero(l, x.kicker, x.h1, x.lead, 'skyline', t.photoAlt.skyline),
      section(x.paras.map((q) => p(q)).join('\n') + h(x.areTitle) + ul(x.areItems) + h(x.notTitle) + ul(x.notItems) + h(x.areaTitle) + p(x.areaText), C.ivory, C.ink),
      ctaBand(l, t),
    ].join('\n\n');
  },
  faq: (l, t) => {
    const x = t.faq;
    return [
      plainHead(x.h1, x.lead, x.kicker),
      section(x.items.map((f) => details(f.q, p(f.a))).join('\n') + h(x.moreTitle) + p(x.moreText) + buttons([{ label: t.cta.whatsappLong, href: waHref(t) }]), C.ivory, C.ink),
    ].join('\n\n');
  },
  contact: (l, t) => {
    const x = t.contact;
    const rows = [
      `**${x.waLabel}:** [${site.whatsappDisplay}](${waHref(t)})`,
      `**${x.phoneLabel}:** [${site.phoneDisplay}](${telHref})`,
      ...(site.email ? [`**${x.emailLabel}:** [${site.email}](mailto:${site.email})`] : []),
      `**${x.addressLabel}:** [${addressLine}](${mapsUrl}) (${x.mapLabel})`,
    ];
    return [
      hero(l, x.kicker, x.h1, x.lead, 'elmHill', t.photoAlt.elmHill, [
        { label: t.cta.whatsappLong, href: waHref(t) },
        { label: t.cta.call, href: telHref, ghost: true },
      ]),
      section(p(x.based) + ul(rows) + h(x.tipsTitle, 2) + ul(x.tips) + p(x.privacyNote) + h(x.emergencyTitle, 2) + p(x.emergencyText), C.ivory, C.ink),
    ].join('\n\n');
  },
  blog: (l, t) => plainHead(t.blog.h1, t.blog.lead, t.blog.kicker) + '\n\n' + '<!-- wp:query {"queryId":0,"query":{"perPage":10,"inherit":false,"postType":"post"}} -->\n<div class="wp-block-query"><!-- wp:post-template -->\n<!-- wp:post-title {"isLink":true} /-->\n<!-- wp:post-excerpt /-->\n<!-- /wp:post-template --></div>\n<!-- /wp:query -->',
};
const ctaBand = (l, t) => section(h(t.home.finalTitle) + p(t.home.finalText) + buttons([{ label: t.cta.whatsappLong, href: waHref(t) }, { label: t.nav.contact, href: loc(l, 'contact'), ghost: true }]), C.midnight800, C.silver100);

const legal = (kind) => (l, t) => {
  const x = t[kind];
  // Terms: drop "The automatic helper" (index 4) because the chat helper is not migrated.
  const sections = kind === 'terms' ? x.sections.filter((_, i) => i !== 4) : x.sections;
  let body = p(`${x.updated}: ${UPDATED}`) + sections.map((s) => h(s.h) + s.p.map((q) => p(q)).join('\n')).join('\n');
  if (kind === 'accessibility') {
    body += h(x.creditsTitle) + p(x.creditsText) +
      ul(Object.entries(photos).map(([k, ph]) => `[${t.photoAlt[k]}](${ph.page}), [${ph.author}](${ph.authorUrl})`));
  }
  return plainHead(x.h1) + '\n\n' + section(body, C.ivory, C.ink);
};
for (const k of ['privacy', 'cookies', 'terms', 'accessibility']) pages[k] = legal(k);

const seoOf = {
  '': 'home', services: 'services', 'how-it-works': 'how', about: 'about', faq: 'faq', contact: 'contact', blog: 'blog',
  privacy: 'privacy', cookies: 'cookies', terms: 'terms', accessibility: 'accessibility',
};
const h1Of = (t, key) => ({ '': t.home.title.split(' | ')[0], services: t.services.h1, 'how-it-works': t.how.h1, about: t.about.h1, faq: t.faq.h1, contact: t.contact.h1, blog: t.blog.h1, privacy: t.privacy.h1, cookies: t.cookies.h1, terms: t.terms.h1, accessibility: t.accessibility.h1 })[key];
// Short menu/page titles per language, from the nav labels
const pageTitle = (t, key) => ({ '': t.nav.home, services: t.nav.services, 'how-it-works': t.nav.how, about: t.nav.about, faq: t.nav.faq, contact: t.nav.contact, blog: t.nav.blog, privacy: t.footer.privacy, cookies: t.footer.cookies, terms: t.footer.terms, accessibility: t.footer.accessibility })[key];

// ---- markdown (the blog uses only ##, paragraphs, - lists, **bold**, [links](url)) ----
function parseFrontmatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const fm = {}; const sources = [];
  for (const line of m[1].split('\n')) {
    let s;
    if ((s = line.match(/^  - \{ label: '(.*)', url: '(.*)' \}$/))) sources.push({ label: s[1].replace(/''/g, "'"), url: s[2] });
    else if ((s = line.match(/^(\w+): (.*)$/))) fm[s[1]] = s[2].replace(/^'(.*)'$/, '$1').replace(/''/g, "'");
  }
  return { fm: { ...fm, readMinutes: Number(fm.readMinutes) }, sources, body: m[2] };
}
function mdToBlocks(md) {
  const out = []; let list = [];
  const flush = () => { if (list.length) { out.push(ul(list)); list = []; } };
  for (const raw of md.split('\n')) {
    const line = raw.trimEnd();
    if (!line.trim()) { flush(); continue; }
    if (line.startsWith('## ')) { flush(); out.push(h(line.slice(3), 2)); }
    else if (/^- /.test(line)) list.push(line.slice(2));
    else { flush(); out.push(p(line)); }
  }
  flush();
  return out.join('\n');
}

// ---- write ----
rmSync(out, { recursive: true, force: true });
const write = (l, name, obj) => { mkdirSync(join(out, l), { recursive: true }); writeFileSync(join(out, l, `${name}.json`), JSON.stringify(obj, null, 2) + '\n'); };
let count = 0;
for (const l of LANGS) {
  const t = dicts[l];
  for (const key of Object.keys(pages)) {
    const seo = t[seoOf[key]];
    write(l, key || 'home', {
      lang: l, type: 'page', key: key || 'home', slug: key || 'home',
      title: pageTitle(t, key), seoTitle: seo.title, description: seo.description,
      content: pages[key](l, t),
    });
    count++;
  }
  const dir = join(root, 'src', 'content', 'blog', l);
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.md'))) {
    const { fm, sources, body } = parseFrontmatter(readFileSync(join(dir, f), 'utf8'));
    const slug = f.replace(/\.md$/, '');
    const b = t.blog;
    const tail =
      p(`${b.checked}: ${fm.checked}`) +
      '\n' + h(b.sources, 2) + ul(sources.map((s) => `[${s.label}](${s.url})`)) +
      '\n' + p(b.note) +
      '\n' + buttons([{ label: t.cta.whatsappLong, href: waHref(t) }, { label: t.nav.contact, href: loc(l, 'contact'), ghost: true }]);
    write(l, `post-${slug}`, {
      lang: l, type: 'post', key: slug, slug, title: fm.title, seoTitle: `${fm.title} | ${site.name}`, description: fm.description,
      excerpt: fm.description, date: fm.published, checked: fm.checked, readMinutes: fm.readMinutes, featuredImage: fm.image,
      content: mdToBlocks(body) + '\n' + tail,
    });
    count++;
  }
  write(l, '_chrome', {
    lang: l, dir: localeInfo[l].dir, htmlLang: localeInfo[l].htmlLang, name: localeInfo[l].name,
    nav: t.nav, cta: t.cta, footer: t.footer,
    links: { home: loc(l), services: loc(l, 'services'), how: loc(l, 'how-it-works'), about: loc(l, 'about'), faq: loc(l, 'faq'), blog: loc(l, 'blog'), contact: loc(l, 'contact'), privacy: loc(l, 'privacy'), cookies: loc(l, 'cookies'), terms: loc(l, 'terms'), accessibility: loc(l, 'accessibility'), whatsapp: waHref(t), tel: telHref },
  });
}
console.log(`Exported ${count} items for ${LANGS.length} languages to ${out}`);
