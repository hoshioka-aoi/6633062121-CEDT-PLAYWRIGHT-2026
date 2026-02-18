import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://katalon-demo-cura.herokuapp.com/#');
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('John Doe');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.locator('//button{id="btn-login"}').click();
  //await page.getByRole('button', { name: 'Login' }).click();
  await page.getByLabel('Facility').selectOption('Seoul CURA Healthcare Center');
  await page.getByText('None').click();
  await page.getByRole('textbox', { name: 'Visit Date (Required)' }).click();
  await page.getByRole('cell', { name: '25' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('hi');
  await page.getByRole('button', { name: 'Book Appointment' }).click();
  await page.getByRole('heading', { name: 'Appointment Confirmation' }).click();
});