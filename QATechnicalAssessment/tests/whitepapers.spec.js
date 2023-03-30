import { test, expect } from '@playwright/test';
import { home } from '../pages/homePage';
import { resources } from '../pages/resourcesModalPage';
import { whitePapers } from '../pages/white-papersPage';
import { testdata } from '../data/testdata'

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.kurtosys.com/');
});

const testdatas = new testdata();


test.describe('User navigate to RESOURCES > White Papers & eBooks > UCITS Whitepapers', () => {

  test('TC - 01 White Papers & eBooks page has title', async ({ page }) => {
    const homepage = new home(page);
    const resource = new resources(page);
    const whitepaper = new whitePapers(page);
    var pagetitle;

    await homepage.hoverOverElement();
    await resource.clickOnElement();

    pagetitle = await whitepaper.getPageTitle();
    expect(pagetitle).toContain(testdatas.pageTitles.whitepapersPage);
  });

  test('TC - 02 Verify error message on a form', async ({ page }) => {
    const homepage = new home(page);
    const resource = new resources(page);
    const whitepaper = new whitePapers(page);

    await homepage.hoverOverElement();
    await resource.clickOnElement();
    await whitepaper.clickelement();

    await whitepaper.enterfirstname(testdatas.userdata.firstname);
    await whitepaper.enterlastname(testdatas.userdata.lastname);
    await whitepaper.entercompany(testdatas.companydata.companyname);
    await whitepaper.enterindustry(testdatas.companydata.industry);
    await whitepaper.clicksendcopybutton();

    await expect(await whitepaper.emailerrormessage).toHaveText(testdatas.errormessages.formerror);
  });

});