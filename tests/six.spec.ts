import { test, expect } from '../fixtures.ts'
import { indexPage} from '../page-objects/indexPage'
import { LoginPage } from '../page-objects/LoginPage'


test('Login failed', async({page,IndexPage,loginPage,}) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/')
    //const indexPagee = new indexPage(page)
    await IndexPage.clickMakeAppointment()

  
    await loginPage.inputLoginForm('John Wick','ThisIsNotAPassword')

    await expect(loginPage.errorMessage).toHaveText(
        'Login failed! Please ensure the username and password are valid.'
    )
}) 