import { test, expect } from '@playwright/test';

test('Locate element using index', async ({ page }) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/#');
    const title = await page.title();

    await expect(title).toBe('CURA Healthcare Service');
    
    await page.locator('#btn-make-appointment').click();
    await page.waitForLoadState();

    const url = await page.url();

    await expect(url).toContain('profile.php#login');
    await page.reload();
    await page.goBack();
    await page.goForward();
})


// test.describe('Get elements', async()=>(
//   test('Get unique elements', async ({ page }) => {
//       await page.goto('https://katalon-demo-cura.herokuapp.com/#');
//       await page.getByRole('link', { name: 'Make Appointment' }).click();
//       await page.getByLabel('Username').click();
//       await page.getByLabel('Username').fill('John Doe');
//       await page.getByLabel('Password').click();
//       await page.getByLabel('Password').fill('ThisIsNotAPassword');
//       await page.locator('//button{id="btn-login"}').click();
//   }),

//   test('Locate element using index', async ({ page }) => {
//     //await page.getByPlaceholder('Username').nth(1).fill('username');
//     //await page.getByPlaceholder('Username').last().fill('username');
//     //await page.getByPlaceholder('Username').first().fill('username');

//     await page.goto('https://katalon-demo-cura.herokuapp.com/#');
//     const title = await page.title();

//     await expect(title).toBe('CURA Healthcare Service')
    
//     await page.locator('#btn-make-appointment').click();
//   })
// ))

