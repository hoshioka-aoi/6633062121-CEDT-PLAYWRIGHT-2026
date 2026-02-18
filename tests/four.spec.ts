import { test, expect } from '@playwright/test';

test('Locate element using index', async ({ page }) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/#');
    const appointmenttxt = await page.locator('#btn-make-appointment').textContent();
    await expect(appointmenttxt).toBe('Make Appointment')
    const isVisi = await page.locator('#btn-make-appointment').isVisible();
    await expect(isVisi).toBeTruthy();

    await page.locator('#btn-make-appointment').click()

    await page.locator('#txt-username').fill('john');
    const value = await page.locator('#txt-username').inputValue();
    await expect(value).toBe('john');

    await expect(await page.getByRole('button', {name: 'Login'}).count()).toEqual(1);
})
