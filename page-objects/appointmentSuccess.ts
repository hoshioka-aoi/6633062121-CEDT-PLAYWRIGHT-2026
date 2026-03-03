import { type Page, type Locator } from "@playwright/test"

export class appointmentSuccess {
    private readonly page : Page
    private readonly confirm : Locator;

    constructor(page:Page){
        this.page = page;
        this.confirm = page.locator('.lead')
        
       
    }

    get successMessage(): Locator {
		return this.confirm
	}
}