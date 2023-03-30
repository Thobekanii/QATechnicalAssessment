
export class home {

    constructor(page) {
        this.resources = page.locator('//span[text()="Resources"]');
    }

    async hoverOverElement() {
        await this.resources.hover();
    }
}