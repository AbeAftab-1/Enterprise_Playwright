import { page, expect} from '@playwright/test';
import logger, { Logger } from '../utils/LoggerUtil';

exports.SauceLoginPage = class SauceLoginPage {
    // Declaring contructor
    constructor(page) {
        this.page = page;
        this.login_textbox = page.locator('[data-test="username"]');
        this.password_textbox = page.locator('[data-test="password"]');
        this.login_button = page.locator('[data-test="login-button"]');
        this.homepage_heading = page.getByText('Swag Labs');
        this.open_menu_button = page.getByRole('button', { name: 'Open Menu' });
        this.logout_button = page.locator('[data-test="logout-sidebar-link"]');
    }

    // Navigate to saucedemo.com    
    async gotoLoginPage() {
        await this.page.goto('https://www.saucedemo.com');
        logger.info('Navigated saucedemo.com');
    }

    // Enter user name    
    async enterUserID(userid) {
        await  this.login_textbox.fill(userid);
        logger.info('Entered User Id');
    }

    // Enter password
    async enterPassword(password) {
        await this.password_textbox.fill(password);
        logger.info('Entered Password');
    }

    // Click "Login" button    
    async clickLoginButton() {
        await this.login_button
        .click()
        .catch((error) => {
            logger.error('Error occurred in login');
            throw error; // rethrow the error if needed
        }).then(()  => logger.info('Successfully logged in'));
    }

    // Verify "Swag Labs" heading is displayed
    async checkHeading() {
        await expect(this.homepage_heading).toBeVisible({
            timeout: 15000,
        }).catch((error) => {
            logger.error('Error occurred in verifying homepage heading');
            throw error;
        }).then(() => logger.info('Successfully verified homepage heading'));
    }

    // Click on "Open Menu" button    
    async clickMenuButton(){
        await this.open_menu_button.click();
        logger.info('Clicked Main Menu button');
    }

    // Click on "Logout" button    
    async clickLogout() {
        await this.logout_button.click();
        logger.info('Successfully logged out');
    }

}