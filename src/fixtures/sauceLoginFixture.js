import { test as base, expect as defaultExpect } from "@playwright/test";
import { SauceLoginPage } from '../pages/saucePage';

export const expect = defaultExpect;

// Define a custom fixture with page
export const test = base.extend({
    saucePageLogin: async ({ page }, use) => {
        // Declare new page from sauceLoginPage 
        const sauceLogin = new SauceLoginPage(page);

        // Navigate to saucedemo.com
        await sauceLogin.gotoLoginPage();
        // Enter user name
        await sauceLogin.enterUserID('standard_user');
        // Enter password
        await sauceLogin.enterPassword('secret_sauce');
        // Click "Login" button
        await sauceLogin.clickLoginButton();
        // Use landingPage
        await use(sauceLogin);

    }
})