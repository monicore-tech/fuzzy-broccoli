import { test, expect } from '@playwright/test';

const breakpoints = [
  { name: 'desktop', width: 1440, height: 2500 },
  { name: 'tablet', width: 768, height: 3500 },
  { name: 'mobile', width: 375, height: 4000 },
];

for (const bp of breakpoints) {
  test(`screenshot ${bp.name}`, async ({ page }) => {
    await page.setViewportSize({ width: bp.width, height: bp.height });
    await page.goto('http://localhost:3000');
    // Wait for animations to settle
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `screenshot-${bp.name}.png`, fullPage: true });
  });
}
