
export class whitePapers {

    constructor(page) {
        this.page = page;
        this.ucitswhitepaper = page.locator('article.elementor-post.elementor-grid-item.post-59806.white-papers.type-white-papers.status-publish.hentry > div > div.elementor-post__text > p > a');

        let iframe = '(//iframe)[1]';
        this.firstname = page.frameLocator(iframe).locator('//form[@id="pardot-form"]/div[1]/input');
        this.lastname = page.frameLocator(iframe).locator('//form[@id="pardot-form"]/div[2]/input');
        this.email = page.frameLocator(iframe).locator('//form[@id="pardot-form"]/div[3]/input');
        this.company = page.frameLocator(iframe).locator('//form[@id="pardot-form"]/div[4]/input');
        this.industry = page.frameLocator(iframe).locator('//form[@id="pardot-form"]/div[5]/input');
        this.submit = page.frameLocator(iframe).locator('//input[@type="submit"]'),

        this.emailerrormessage = page.frameLocator(iframe).locator('//form[@id="pardot-form"]/div[3]/input/following::p[@class="error no-label"]');

    }

    async getPageTitle() {
        return await this.page.title();
    }

    async clickelement() {
        await this.ucitswhitepaper.click();
    }

    async enterfirstname(fName) {
        await this.firstname.scrollIntoViewIfNeeded();
        await this.firstname.fill(fName);
    }

    async enterlastname(lName) {
        await this.lastname.scrollIntoViewIfNeeded();
        await this.lastname.fill(lName);
    }

    async enteremail(email) {
        await this.email.scrollIntoViewIfNeeded();
        await this.email.fill(email);
    }

    async entercompany(company) {
        await this.company.scrollIntoViewIfNeeded();
        await this.company.fill(company);
    }

    async enterindustry(industry) {
        await this.industry.scrollIntoViewIfNeeded();
        await this.industry.fill(industry);
    }

    async clicksendcopybutton(){
		await this.submit.scrollIntoViewIfNeeded();
		await this.submit.click();
	}
}