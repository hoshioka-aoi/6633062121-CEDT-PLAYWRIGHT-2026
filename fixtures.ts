import { test as base } from '@playwright/test'
import { LoginPage } from './page-objects/LoginPage'
import { indexPage } from './page-objects/indexPage'
import { appointmentPage} from './page-objects/appointmentPage'
import { appointmentSuccess} from './page-objects/appointmentSuccess'

export const test = base.extend<{
	loginPage: LoginPage
	IndexPage: indexPage
	AppointmentPage: appointmentPage
	AppointmentSuccess: appointmentSuccess
}>({
	loginPage: async ({ page }, use) => {
		const loginPage = new LoginPage(page)
		await use(loginPage)
	},
	IndexPage: async ({ page }, use) => {
		const IndexPage = new indexPage(page)
		await use(IndexPage)
	},
	AppointmentPage: async ({ page }, use) => {
		const AppointmentPage = new appointmentPage(page)
		await use(AppointmentPage)
	},
	AppointmentSuccess: async ({ page }, use) => {
		const AppointmentSuccess = new appointmentSuccess(page)
		await use(AppointmentSuccess)
	},
})

export { expect } from '@playwright/test'