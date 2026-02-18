import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/List_of_j%C5%8Dy%C5%8D_kanji');
  await page.getByRole('link', { name: 'Japanese', exact: true }).click();
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).click();
  await page.getByRole('combobox', { name: 'Search Wikipedia' }).click();
  await page.getByRole('combobox', { name: 'Search Wikipedia' }).fill('jeffre');
  await page.getByRole('link', { name: 'Jeffrey Epstein American' }).click();
  await page.getByRole('link', { name: 'Ghislaine Maxwell' }).nth(1).click();
});