import { type Page, type Locator } from "@playwright/test"

export class indexPage {
    private readonly page : Page
    private readonly makeAppointment: Locator

    constructor(page: Page){
        this.page = page;
        this.makeAppointment = page.getByRole('link',{
            name: "Make Appointment"
        });
    }

    async clickMakeAppointment(): Promise<void>{
        this.makeAppointment.click();
    }
}