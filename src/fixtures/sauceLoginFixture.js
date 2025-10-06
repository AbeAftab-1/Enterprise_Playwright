import { test as base, expect as defaultExpect } from "@playwright/test";
import { SauceLoginPage } from '../pages/saucePage';
import { decrypt } from "../utils/CryptojsUtil";

export const expect = defaultExpect;

// Define a custom fixture with page
export const test = base.extend({
    saucePageLogin: async ({ page }, use) => {
        // Declare new page from sauceLoginPage 
        const sauceLogin = new SauceLoginPage(page);

         // Navigate to saucedemo.com
        await sauceLogin.gotoLoginPage();
        // Enter user name
        await sauceLogin.enterUserID(decrypt(process.env.userid));
        // Enter password
        await sauceLogin.enterPassword(decrypt(process.env.password));
        // Click "Login" button
        await sauceLogin.clickLoginButton();
        // Use landingPage
        await use(sauceLogin);

    }
})