import { test as base, expect as defaultExpect } from "@playwright/test";
import { LoginPage } from '../pages/loginPage';
import { decrypt } from "../utils/CryptojsUtil";

export const expect = defaultExpect;

// Define a custom fixture with page
export const test = base.extend({
    landingPage: async ({page},use) => {
        // declare login to intiate new LoginPage class object
        const loginPage = new LoginPage(page);
            // go to base URL
        await loginPage.gotoLoginPage();
        // enterUseridPassword method to enter userid and password
        await loginPage.enterUseridPassword(decrypt(process.env.userid), decrypt(process.env.password));

        // click login button and save homepage return value
        const homepage = await loginPage.login();
        // Use landingPage
        await use(homepage);
    }

})


