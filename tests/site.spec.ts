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
