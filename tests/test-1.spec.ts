import { test, expect } from '@playwright/test';

test('Initial test', async ({ page }) => {
  // The home page features 3 random manufacturers, so search to make sure Ferroline is listed
  await page.goto('/en/gb/search?q=Ferroline');
  await expect(page.getByRole('button', { name: 'Accept all' })).toBeVisible();
  await page.getByRole('button', { name: 'Accept all' }).click();
  await expect(page.getByRole('dialog', { name: 'Discover TradeSource Insights' })).toBeVisible();
  await page.getByRole('button', { name: 'Close dialog' }).click();
  await page.getByRole('tab', { name: 'Manufacturers' }).click();
  const ferrolineLink =page.getByRole('link', { name: /^Ferroline Ferroline Fixings/ });
  await expect(ferrolineLink).toBeVisible();
  await ferrolineLink.click();
  await expect(page.getByTestId('manufacturer-name')).toContainText('Ferroline');
});