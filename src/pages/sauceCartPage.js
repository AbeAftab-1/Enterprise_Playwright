import { page, expect } from '@playwright/test';
import logger, { Logger } from '../utils/LoggerUtil';

exports.SauceCartPage = class SauceCartPage {
    // Declaring contructor
    constructor(page) {
        this.page = page;
        this.check_page_title = page.locator('[data-test="title"]');
        this.continue_shopping_button = page.locator('[data-test="continue-shopping"]');
        this.checkout_button = page.locator('[data-test="checkout"]');
        this.remove_fleece = page.locator('[data-test="remove-sauce-labs-fleece-jacket"]');
        this.remove_backpack = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.remove_bike_light = page.locator('[data-test="remove-sauce-labs-bike-light"]');
        this.remove_bolt_tshirt = page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
        this.remove_onesie = page.locator('[data-test="remove-sauce-labs-onesie"]');
        this.remove_red_tshirt = page.locator('[data-test="remove-test.allthethings()-t-shirt-(red)"]');
    }

    // Check the heading of Cart Page
    async checkCartPageHeadding() {
        await expect(this.check_page_title).toContainText('Your Cart');
        logger.info('Checked Cart Page Heading');
    }

    // Check Continue Shopping button in Cart Page
    async checkCartPageContinueShoppingButton() {
        await expect(this.continue_shopping_button).toBeVisible({
            timeout: 15000,
        }).catch((error) => {
            logger.error('Error occurred in verifying Continue button');
            throw error;
        }).then(() => logger.info('Successfully verified Continue button'));

    }

    // Check Checkout button in Cart Page
    async checkCartPageCheckoutButton() {
        await expect(this.checkout_button).toBeVisible({
            timeout: 15000,
        }).catch((error) => {
            logger.error('Error occurred in verifying Checkout button');
            throw error;
        }).then(() => logger.info('Successfully verified Checkout button'));

    }

    // Check Remove (Fleece) button in Cart Page
    async checkRemoveFleece() {
        await expect(this.remove_fleece).toBeVisible();
        logger.info('Checked Remove Fleece button is available');
    }

    // Check Remove (bike light) button in Cart Page
    async checkRemoveBikeLight() {
        await expect(this.remove_bike_light).toBeVisible();
        logger.info('Checked Remove Bike Light button is available');
    }

    // Check Remove (bolt t-shirt) button in Cart Page
    async checkRemoveBoltTshirt() {
        await expect(this.remove_bolt_tshirt).toBeVisible();
        logger.info('Checked Remove Bolt T-Shirt button is available');
    }

    // Check Remove (onesie) button in Cart Page
    async checkRemoveOnesie() {
        await expect(this.remove_onesie).toBeVisible();
        logger.info('Checked Remove Onesie button is available');
    }

    // Check Remove (Red T-Shirt) button in Cart Page
    async checkRemoveRedTshirt() {
        await expect(this.remove_red_tshirt).toBeVisible();
        logger.info('Checked Remove Red T-Shirt button is available');
    }

    // Check Remove (Backpack) button in Cart Page
    async checkRemoveBackpack() {
        await expect(this.remove_backpack).toBeVisible();
        logger.info('Checked Remove Backpack button is available')
    }

    // Click on Checkout button in Cart Page
    async clickCartPageCheckoutButton() {
        await this.checkout_button.click();
        logger.info('Clicked Checkout button in Cart page');
    }

}