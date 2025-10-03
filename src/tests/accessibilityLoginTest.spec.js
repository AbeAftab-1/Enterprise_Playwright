import { LoginPage } from '../pages/loginPage';
import { decrypt, encrypt } from '../utils/CryptojsUtil';
// importing axeTest fixture to verify accessibiltiy
const { test, expect } = require('../fixtures/axeTestFixture');

// Remove ".skip" to run this test
test.skip('Accessibility Test using custom fixture', async ({ page, makeAxeBuilder }) => {
    // declare login to intiate new LoginPage class object
    const login = new LoginPage(page);
    // go to base URL
    await login.gotoLoginPage();
    // enterUseridPassword method to enter userid and password
    await login.enterUseridPassword(decrypt(process.env.userid), decrypt(process.env.password));

    // Full page review
    const loginAccessibilityScanResults = await makeAxeBuilder()
        .analyze();
    // Assertion
    expect(loginAccessibilityScanResults.violations).toEqual([]);

    // click login button and save homepage return value
    const homepage = await login.login();
    // check correct heading is displayed
    await homepage.checkHeading();

    // Full page review
    const homeAccessibilityScanResults = await makeAxeBuilder()
        .analyze();
    // Assertion
    expect(homeAccessibilityScanResults.violations).toEqual([]);
});