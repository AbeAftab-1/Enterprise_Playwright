// importing combined axeTest fixture and login fixture
import { test, expect } from '../fixtures/sauceFixtures';

// basic test to log into saucedemo.com
test('Sauce Demo Login and Logout', async ({ saucePageLogin, makeAxeBuilder }) => {
    // Login and verify "Swag Labs" heading is displayed
    await saucePageLogin.checkHeading();

    // Full page review
    const loginAccessibilityScanResults = await makeAxeBuilder()
        .analyze();
    // Assertion
    expect(loginAccessibilityScanResults.violations).toEqual([]);

    // Click on "Open Menu" button
    await saucePageLogin.clickMenuButton();
    // Click on "Logout" button
    await saucePageLogin.clickLogout();
});