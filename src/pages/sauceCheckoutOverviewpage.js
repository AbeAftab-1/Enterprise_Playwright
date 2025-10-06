import { page, expect} from '@playwright/test';
import logger, { Logger } from '../utils/LoggerUtil';

exports.SauceCheckoutOverviewPage = class SauceCheckoutOverviewPage {
    // Declaring consturctor
    constructor(page) {
        this.page = page;
        this.check_page_title = page.locator('[data-test="title"]');
        this.check_subtotal_label = page.locator('[data-test="subtotal-label"]');
        this.cancel_button = page.locator('[data-test="cancel"]');
        this.finish_button = page.locator('[data-test="finish"]');
    }

    async checkPageTitle() {
        await expect(this.check_page_title).toContainText('Checkout: Overview');
        logger.info('Checked Checkout Overview Page title')
    } 

    async checkSubtotalLabel(price) {
        await expect(this.check_subtotal_label).toContainText(price);
        logger.info('Checked subtotal price');
    }

    async checkCancelButton() {
        await expect(this.cancel_button).toBeVisible();
        logger.info('Checked Cancel button');
    }

    async clickFinishButton() {
        await expect(this.finish_button).toBeVisible();
        logger.info('Checked Finish button');
        await this.finish_button.click();
        logger.info('Clicked Finish button');
    }
}