import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:4321',
    launchOptions: process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {},
  },
  webServer: {
    command: 'npx astro preview --port 4321',
    url: 'http://localhost:4321',
    reuseExistingServer: true,
  },
});
