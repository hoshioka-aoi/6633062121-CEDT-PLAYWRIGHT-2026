import { test as base } from '@playwright/test'
import { LoginPage } from './page-objects/LoginPage'
import { indexPage } from './page-objects/indexPage'

export const test = base.extend<{
	loginPage: LoginPage
	IndexPage: indexPage
}>({
	loginPage: async ({ page }, use) => {
		const loginPage = new LoginPage(page)
		await use(loginPage)
	},
	IndexPage: async ({ page }, use) => {
		const IndexPage = new indexPage(page)
		await use(IndexPage)
	},
})

export { expect } from '@playwright/test'