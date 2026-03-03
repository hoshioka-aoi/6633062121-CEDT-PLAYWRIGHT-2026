import { type Page, type Locator } from "@playwright/test"

export class appointmentPage {
    private readonly page : Page
    private readonly calendar : Locator;
    private readonly date : Locator;
    private readonly appointBtn : Locator;
    

    constructor(page:Page){
        this.page = page;
        this.calendar = page.locator(`#txt_visit_date`)
        this.date = this.page.locator('td.day:not(.old)').filter({ hasText: /^22$/ });
        this.appointBtn = page.locator(`#btn-book-appointment`)
       
    }

     public async appointForm(): Promise<void>{
        await this.calendar.click()
        await this.date.click()
        await this.appointBtn.click()
    }

}