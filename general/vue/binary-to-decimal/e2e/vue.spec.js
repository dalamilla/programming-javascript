import { test, expect } from '@playwright/test';

test('visits the app root url', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Binary' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Decimal' })).toBeVisible();
})
