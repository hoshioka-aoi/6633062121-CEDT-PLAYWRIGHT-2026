import { test, expect } from '../../fixtures.ts'
import { indexPage} from '../../page-objects/indexPage.ts'
import { LoginPage } from '../../page-objects/LoginPage.ts'


test('Appointment', async({page,IndexPage,loginPage,AppointmentPage, AppointmentSuccess}) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/')
    //const indexPagee = new indexPage(page)
    await IndexPage.clickMakeAppointment()

  
    await loginPage.inputLoginForm('John Doe','ThisIsNotAPassword')

    await AppointmentPage.appointForm()

    await expect(AppointmentSuccess.successMessage).toHaveText(
        'Please be informed that your appointment has been booked as following:'
    )
 
}) 