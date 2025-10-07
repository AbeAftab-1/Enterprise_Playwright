import { page, expect} from '@playwright/test';
import logger, { Logger } from '../utils/LoggerUtil';

exports.SauceCheckoutOverviewPage = class SauceCheckoutOverviewPage {
    // Declaring consturctor
    constructor(page) {
        this.page = page;
        this.check_page_title = page.locator('[data-test="title"]');
        this.cancel_button = page.locator('[data-test="cancel"]');
        this.finish_button = page.locator('[data-test="finish"]');
    }

    // Check Checkout Overview Page Title
    async checkPageTitle() {
        await expect(this.check_page_title).toContainText('Checkout: Overview');
        logger.info('Checked Checkout Overview Page title')
    } 

    // Check Cancel Button
    async checkCancelButton() {
        await expect(this.cancel_button).toBeVisible();
        logger.info('Checked Cancel button');
    }

    // Click on Finish Button
    async clickFinishButton() {
        await expect(this.finish_button).toBeVisible();
        logger.info('Checked Finish button');
        await this.finish_button.click();
        logger.info('Clicked Finish button');
    }
}