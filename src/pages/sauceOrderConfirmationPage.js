import { page, expect} from '@playwright/test';
import logger, { Logger } from '../utils/LoggerUtil';

exports.SauceOrderConfirmationPage = class SauceOrderConfirmationPage {
    // Declaring Constructor
    constructor(page) {
        this.page = page;
        this.thank_you_text = page.locator('[data-test="complete-header"]');
        this.order_confirmation_text = page.locator('[data-test="complete-text"]');
        this.back_home = page.locator('[data-test="back-to-products"]');
    }

    async checkThankYouText() {
        await expect(this.thank_you_text).toBeVisible();
        logger.info('Check Thank You Text in Checkout Overview page');
    }

    async checkOrderConfirmation() {
        await expect(this.order_confirmation_text).toBeVisible();
        logger.info('Check Order Confirmation Text');
    }

    async clickBackHomeButton() {
        await expect(this.back_home).toBeVisible();
        logger.info('Checked Finish button');
        await this.back_home.click();
        logger.info('Clicked Finish button');
    }

}