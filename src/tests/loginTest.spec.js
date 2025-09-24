import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';


test('Log into SalesForce', async ({ page }) => {
    // declare login to intiate new LoginPage class object
    const login = new LoginPage(page);
    // go to base URL
    await login.gotoLoginPage();
    // login method with logging in using userid and password
    const homepage = await login.login('abiraftab-vp2g@force.com','P1ayWrightSF#');
    // check correct heading is displayed
    await homepage.checkHeading();
})