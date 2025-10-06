import { page, expect} from '@playwright/test';
import logger, { Logger } from '../utils/LoggerUtil';

exports.SauceCartPage = class SauceCartPage {
    // Declaring contructor
    constructor(page) {
        this.page = page;
        this.check_page_title = page.locator('[data-test="title"]');
        this.continue_shopping_button = page.locator('[data-test="continue-shopping"]');
        this.checkout_button = page.locator('[data-test="checkout"]');
        this.remove_fleece = page.locator('[data-test="remove-sauce-labs-fleece-jacket"]');
        this.fleece_link = page.locator('[data-test="inventory-item-name"]');
        this.fleece_price = page.locator('[data-test="inventory-item-price"]');
    }

    async checkCartPageHeadding() {
        await expect(this.check_page_title).toContainText('Your Cart');
        logger.info('Checked Cart Page Heading');
    }

    async checkCartPageContinueShoppingButton() {
        await expect(this.continue_shopping_button).toBeVisible({
            timeout: 15000,
        }).catch((error) => {
            logger.error('Error occurred in verifying Continue Shopping button');
            throw error;
        }).then(() => logger.info('Successfully verified Continue Shopping heading'));

    }

    async checkCartPageCheckoutButton() {
            await expect(this.checkout_button).toBeVisible({
                timeout: 15000,
            }).catch((error) => {
                logger.error('Error occurred in verifying Continue Shopping button');
                throw error;
            }).then(() => logger.info('Successfully verified Continue Shopping heading'));

    }

    async checkRemoveFleece(){
        await expect(this.remove_fleece).toBeVisible();
        logger.info('Checked Move Fleece Button available');
    }

    async checkProductLink(productTitle) {
        await expect(this.fleece_link).toContainText(productTitle);
        logger.info('Checked product title');
    }

    async checkProductPrice(productPrice) {
        await expect(this.fleece_price).toContainText(productPrice);
        logger.info('Checked product price');
    }

    async clickCartPageCheckoutButton() {
        await this.checkout_button.click();
        logger.info('Clicked Checkout button in Cart page');
    }

}