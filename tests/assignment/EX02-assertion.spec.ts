import { test, expect } from '@playwright/test';


test('appointment test', async ({ page }) => {
  
  await page.goto('https://katalon-demo-cura.herokuapp.com/#');
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('John Doe');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByLabel('Facility').selectOption('Hongkong CURA Healthcare Center');
  await page.getByLabel('Facility').selectOption('Seoul CURA Healthcare Center');
  await page.getByLabel('Facility').selectOption('Tokyo CURA Healthcare Center');
  await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();
  await page.getByRole('radio', { name: 'Medicaid' }).check();
  await page.getByRole('radio', { name: 'None' }).check();
  await page.getByRole('radio', { name: 'Medicare' }).check();
  await page.locator('span').click();
  await page.getByRole('cell', { name: '18' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('test');
  await page.getByRole('button', { name: 'Book Appointment' }).click();
  await page.locator('div').filter({ hasText: '18/02/' }).nth(3).click();
  await page.locator('div').filter({ hasText: 'test' }).nth(3).click();
});