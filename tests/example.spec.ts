import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// test('test', async ({ page }) => {
//   await page.goto('https://katalon-demo-cura.herokuapp.com/#');
//   await page.getByRole('link', { name: 'Make Appointment' }).click();
//   await page.getByLabel('Username').click();
//   await page.getByLabel('Username').fill('John Doe');
//   await page.getByLabel('Password').click();
//   await page.getByLabel('Password').fill('ThisIsNotAPassword');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.locator('#appointment')).toContainText('Make Appointment');
//   await page.locator('#menu-toggle').click();
//   await page.getByRole('link', { name: 'Logout' }).click();
//   await page.getByRole('link', { name: 'Make Appointment' }).click();
//   await page.getByLabel('Username').click();
//   await page.getByLabel('Username').fill('John Wick');
//   await page.getByLabel('Password').click();
//   await page.getByLabel('Password').fill('ThisIsNotAPassword');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.locator('#login')).toContainText('Login failed! Please ensure the username and password are valid.');
//   await page.getByLabel('Username').click();
//   await page.getByLabel('Username').fill('John Doe');
//   await page.getByLabel('Password').click();
//   await page.getByLabel('Password').fill('ThisIsAPassword');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.locator('#login')).toContainText('Login failed! Please ensure the username and password are valid.');
// });