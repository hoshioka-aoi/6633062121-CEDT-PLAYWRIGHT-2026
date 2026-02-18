import { test, expect } from '@playwright/test';
import invalidUsers from "../test-data/users/invalid-users.json"

// test('Locate element using index', async ({ page }) => {
//     await page.goto('https://testautomationpractice.blogspot.com/');

//     const popupPromise = page.waitForEvent('popup')
     
//     await page.locator('#alertBin').click()

//     const popup = await popupPromise

//     await expect(popup.locator('h1')).toHaveText('I am an alert box!')
// })

test.describe('Get elements', async()=>(

  test.beforeEach(async({page}) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/#');
  }),

  test('Get unique elements', async ({ page }) => {
      await expect(page.locator('#btn-make-appointment')).toHaveText('Make Appointment');
      
  }),

  test('Locate element using index', async ({ page }) => {
        const text = await page.locator('#btn-make-appointment').textContent();
        await expect(text).toBe('Make Appointment');

  })
))



