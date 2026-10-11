import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const locales = ['', 'bg/', 'ro/', 'tr/', 'ku/', 'ckb/'];
const pages = ['', 'services/', 'how-it-works/', 'about/', 'faq/', 'contact/', 'blog/', 'blog/first-weeks-norwich-norfolk/', 'privacy/', 'cookies/', 'terms/', 'accessibility/'];

// Photos come from the Unsplash CDN. Block them so tests do not depend on the network.
async function prepare(page: Page) {
  await page.route(/images\.unsplash\.com/, (r) => r.abort());
}

for (const l of locales) {
  for (const p of pages) {
    test(`a11y /${l}${p}`, async ({ page }) => {
      await prepare(page);
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(`/${l}${p}`);
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
      const serious = results.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
      expect(serious.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).slice(0, 3).join(' | ')}`)).toEqual([]);
    });
  }
}

test('mobile menu opens, traps focus and closes with Escape', async ({ page }) => {
  await prepare(page);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.locator('[data-menu-toggle]');
  await expect(toggle).toBeVisible();
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#mobile-menu a').first()).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(toggle).toBeFocused();
});

test('language switcher keeps the same page', async ({ page }) => {
  await prepare(page);
  await page.goto('/faq/');
  await page.locator('.lang__btn').click();
  await page.locator('.lang__panel a[hreflang="tr"]').click();
  await expect(page).toHaveURL(/\/tr\/faq\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'tr');
});

test('Sorani pages are right to left', async ({ page }) => {
  await prepare(page);
  await page.goto('/ckb/');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
});

test('every page has hreflang alternates for all languages', async ({ page }) => {
  await page.goto('/about/');
  await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(7);
});

test('cookie banner remembers the choice', async ({ page }) => {
  await prepare(page);
  await page.goto('/');
  const banner = page.locator('[data-cookie]');
  await expect(banner).toBeVisible();
  await banner.locator('[data-consent="rejected"]').click();
  await expect(banner).toBeHidden();
  await page.reload();
  await expect(banner).toBeHidden();
  await page.locator('[data-cookie-open]').first().click();
  await expect(banner).toBeVisible();
});

const chatCases: [string, string, RegExp][] = [
  ['', 'Do you help with visa questions?', /immigration advice/i],
  ['', 'how much does it cost', /free/i],
  ['bg/', 'личен лекар', /GP/],
  ['ro/', 'cat costa', /./],
  ['tr/', 'doktor', /GP/],
  ['ku/', 'doktor', /GP/],
  ['ckb/', 'دکتۆر', /GP/],
  // Any language on any page: the chat reads the question, not the page language
  ['ckb/', 'doktor', /GP/],
  ['', 'личен лекар', /GP/],
  ['', 'دکتۆر', /GP/],
  // Arabic-keyboard spellings of Sorani letters
  ['ckb/', 'دكتور', /GP/],
  ['', 'دكتور', /GP/],
  // Romanian typed with cedillas and without diacritics
  ['', 'cat costa', /./],
  ['ro/', 'ce servicii oferiți', /./],
  // Address and visiting questions in all six languages
  ['', 'what is your address', /73A Dereham Road/],
  ['bg/', 'адрес', /73A Dereham Road/],
  ['ro/', 'adresa', /73A Dereham Road/],
  ['tr/', 'adres nerede', /73A Dereham Road/],
  ['ku/', 'navnîşan', /73A Dereham Road/],
  ['ckb/', 'ناونیشان', /73A Dereham Road/],
];
for (const [l, q, re] of chatCases) {
  test(`chatbot answers "${q}" on /${l}`, async ({ page }) => {
    await prepare(page);
    await page.addInitScript(() => localStorage.setItem('a4y-consent', 'rejected'));
    await page.goto(`/${l}`);
    await page.locator('[data-chat-toggle]').click();
    await page.locator('#chat-input').fill(q);
    await page.locator('#chat-input').press('Enter');
    const reply = page.locator('.msg--bot').nth(1);
    await expect(reply).toBeVisible();
    await expect(reply).toContainText(re);
    const fallback = await page.evaluate(() => JSON.parse(document.querySelector('[data-chat-data]')!.textContent!).fallback);
    await expect(reply).not.toContainText(fallback);
  });
}

test('unknown address shows the 404 page in the right language', async ({ page }) => {
  await prepare(page);
  const res = await page.goto('/ro/does-not-exist/');
  expect(res?.status()).toBe(404);
  await expect(page.locator('[data-nf]')).toHaveAttribute('lang', 'ro');
});

test('the 404 page chat speaks the visitor language', async ({ page }) => {
  await prepare(page);
  await page.addInitScript(() => localStorage.setItem('a4y-consent', 'rejected'));
  await page.goto('/ro/does-not-exist/');
  await page.locator('[data-chat-toggle]').click();
  await expect(page.locator('#chat-title')).not.toHaveText('Quick answers');
  await expect(page.locator('[data-chat]')).toHaveAttribute('lang', 'ro');
});

test('a question in another language is answered in that language', async ({ page }) => {
  await prepare(page);
  await page.addInitScript(() => localStorage.setItem('a4y-consent', 'rejected'));
  await page.goto('/');
  await page.locator('[data-chat-toggle]').click();
  await page.locator('#chat-input').fill('دکتۆر');
  await page.locator('#chat-input').press('Enter');
  const reply = page.locator('.msg--bot').nth(1);
  await expect(reply).toHaveAttribute('lang', 'ckb');
  await expect(reply).toHaveAttribute('dir', 'rtl');
});

for (const l of locales) {
  test(`language pills fit a 390px phone on /${l}`, async ({ page }) => {
    await prepare(page);
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`/${l}`);
    const pills = page.locator('.hero__langs .flags a');
    await expect(pills).toHaveCount(6);
    for (let i = 0; i < 6; i++) {
      const pill = pills.nth(i);
      const box = (await pill.boundingBox())!;
      expect(box.x).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width).toBeLessThanOrEqual(390);
      expect(box.height).toBeGreaterThanOrEqual(40);
      // text is not cut off inside its pill
      expect(await pill.evaluate((el) => el.scrollWidth <= el.clientWidth + 1)).toBe(true);
    }
  });
}

test('contact details are real and consistent', async ({ page, request }) => {
  await prepare(page);
  await page.goto('/contact/');
  await expect(page.locator('.methods a[href="tel:+447466951175"]')).toBeVisible();
  await expect(page.locator('.methods a[href^="https://wa.me/447466951175"]')).toBeVisible();
  await expect(page.locator('address').first()).toContainText('73A Dereham Road');
  const html = await page.content();
  expect(html).not.toContain('example.com');
  expect(html).not.toContain('0000000000');
  const ld = await page.$$eval('script[type="application/ld+json"]', (els) => els.map((e) => JSON.parse(e.textContent!)));
  const org = ld.find((d) => d['@type'] === 'ProfessionalService');
  expect(org.telephone).toBe('+44 7466 951175');
  expect(org.address.streetAddress).toBe('73A Dereham Road');
  expect(ld.some((d) => d['@type'] === 'BreadcrumbList')).toBe(true);
  expect(ld.some((d) => d['@type'] === 'WebSite')).toBe(true);
  const llms = await request.get('/llms.txt');
  expect(await llms.text()).toContain('73A Dereham Road');
  const robots = await (await request.get('/robots.txt')).text();
  expect(robots).toContain('GPTBot');
  expect(robots).toContain('Sitemap: https://');
});
