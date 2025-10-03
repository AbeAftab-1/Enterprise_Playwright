import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { decrypt, encrypt } from '../utils/CryptojsUtil';

// Remove ".skip" to run this test
test.skip('Log into SalesForce', async ({ page }) => {
    // declare login to intiate new LoginPage class object
    const login = new LoginPage(page);
    // go to base URL
    await login.gotoLoginPage();
    // enterUseridPassword method to enter userid and password
    await login.enterUseridPassword(decrypt(process.env.userid),decrypt(process.env.password));

    // click login button and save homepage return value
    const homepage = await login.login();
    // check correct heading is displayed
    await homepage.checkHeading();
});

