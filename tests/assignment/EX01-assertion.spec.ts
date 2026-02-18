import { test, expect } from '@playwright/test';

test.describe('Login Test', async()=>{

  test.beforeEach(async({page}) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/#');
    await page.getByRole('link', { name: 'Make Appointment' }).click();
  }),

  test('Login Successful', async ({ page }) => {
      await page.getByLabel('Username').click();
      await page.getByLabel('Username').fill('John Doe');
      await page.getByLabel('Password').click();
      await page.getByLabel('Password').fill('ThisIsNotAPassword');
      await page.getByRole('button', { name: 'Login' }).click();
      await expect(page.locator('#appointment')).toContainText('Make Appointment');
      
  }),

  test('Login Fail 1', async ({ page }) => {
      await page.getByLabel('Username').click();
      await page.getByLabel('Username').fill('John Wick');
      await page.getByLabel('Password').click();
      await page.getByLabel('Password').fill('ThisIsNotAPassword');
      await page.getByRole('button', { name: 'Login' }).click();
      await expect(page.locator('#login')).toContainText('Login failed! Please ensure the username and password are valid.');

  }),

  test('Login Fail 2', async ({ page }) => {
      await page.getByLabel('Username').click();
      await page.getByLabel('Username').fill('John Doe');
      await page.getByLabel('Password').click();
      await page.getByLabel('Password').fill('ThisIsAPassword');
      await page.getByRole('button', { name: 'Login' }).click();
      await expect(page.locator('#login')).toContainText('Login failed! Please ensure the username and password are valid.');

  })
})

