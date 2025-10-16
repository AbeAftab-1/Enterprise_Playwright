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
        this.fleece_link = page.locator('[data-test="item-5-title-link"]');
        this.fleece_button = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
        this.backpack_link = page.locator('[data-test="item-4-title-link"]');
        this.backpack_button = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.bike_light_link = page.locator('[data-test="item-0-title-link"]');
        this.bike_light_button = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.bolt_tshirt_link = page.locator('[data-test="item-1-title-link"]');
        this.bolt_tshirt_button = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.onesie_link = page.locator('[data-test="item-2-title-link"]');
        this.onesie_button = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
        this.red_tshirt_link = page.locator('[data-test="item-3-title-link"]');
        this.red_tshirt_button = page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
        this.go_to_cart = page.locator('[data-test="shopping-cart-link"]');
        this.product_sort_dropdown = page.locator('[data-test="product-sort-container"]');
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

    // add fleece
    async addFleece() {
        await expect(this.fleece_link).toBeVisible({
            timeout: 15000,
        });
        await expect(this.fleece_button).toBeVisible();
        await this.fleece_button.click();
        logger.info('Added Fleece to the cart');
    }

    // Add Backpack
    async addBackpack() {
        await expect(this.backpack_link).toBeVisible({
            timeout: 15000,
        });
        await expect(this.backpack_button).toBeVisible();
        await this.backpack_button.click();
        logger.info('Added backpack to the cart');
    }

    // Add Bike Light
    async addBikeLight() {
        await expect(this.bike_light_link).toBeVisible({
            timeout: 15000,
        });
        await expect(this.bike_light_button).toBeVisible();
        await this.bike_light_button.click();
        logger.info('Added Bike Light to the cart');
    }

    // Add Bolt T-Shirt
    async addBoltTshirt() {
        await expect(this.bolt_tshirt_link).toBeVisible({
            timeout: 15000,
        });
        await expect(this.bolt_tshirt_button).toBeVisible();
        await this.bolt_tshirt_button.click();
        logger.info('Added Bolt T-Shirt to the cart');
    }

    // Add Onesie
    async addOnesie() {
        await expect(this.onesie_link).toBeVisible({
            timeout: 15000,
        });
        await expect(this.onesie_button).toBeVisible();
        await this.onesie_button.click();
        logger.info('Added Onesie to the cart');
    }

    // Add Red T-Shirt
    async addRedTshirt() {
        await expect(this.red_tshirt_link).toBeVisible({
            timeout: 15000,
        });
        await expect(this.red_tshirt_button).toBeVisible();
        await this.red_tshirt_button.click();
        logger.info('Added Red T-Shirt to the cart');
    }

    // go to cart
    async goToCart() {
        await this.go_to_cart.click();
        logger.info('Navigated to Cart Page');
    }

    // Select product sort order
    async sortProduct(sortkey) {
        await this.product_sort_dropdown.selectOption(sortkey);        
        logger.info('Sorted products in Homepage with key')
    }

}