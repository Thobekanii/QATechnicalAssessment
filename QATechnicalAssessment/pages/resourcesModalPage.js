
export class resources {

    constructor(page) {
        this.whitePaperAndeBooks = page.locator('//span[text()="White Papers & eBooks"]');
    }

    async clickOnElement(){
		await this.whitePaperAndeBooks.click();
	}
}