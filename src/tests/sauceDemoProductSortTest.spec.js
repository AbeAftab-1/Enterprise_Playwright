// importing combined axeTest fixture and login fixture
import { test, expect } from '../fixtures/sauceFixtures';
// importing sort order data from sauceProductSort.json
import pdata from "../data/sauceProductSort.json";

// basic test to log into saucedemo.com
test('Sauce Demo Login, Products Sort and Logout', async ({ saucePageLogin}) => {
    // Login and verify "Swag Labs" heading is displayed
    await saucePageLogin.checkHeading();

    // Sorting products respectively by Z to A, Low to Hi, Hi to Low and A to Z
    for (const prodSort of pdata) {
        await saucePageLogin.sortProduct(prodSort.sortorder);
    }

    // Click on "Open Menu" button
    await saucePageLogin.clickMenuButton();
    // Click on "Logout" button
    await saucePageLogin.clickLogout();
});