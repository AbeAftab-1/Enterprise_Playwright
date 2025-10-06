import { page, expect} from '@playwright/test';
import logger, { Logger } from '../utils/LoggerUtil';

exports.SauceBuyerInfoPage = class SauceBuyerInfoPage {
    // Declaring constructor
    constructor(page) {
        this.page=page;
        this.check_page_title = page.locator('[data-test="title"]');
        this.first_name_textbox = page.locator('[data-test="firstName"]');
        this.last_name_textbox = page.locator('[data-test="lastName"]');
        this.zip_code_textbox = page.locator('[data-test="postalCode"]');
        this.continue_button = page.locator('[data-test="continue"]');
        this.cancel_button = page.locator('[data-test="cancel"]');
    }

    async checkPageTitle() {
        await expect(this.check_page_title).toContainText('Checkout: Your Information');
        logger.info('Checked Buyer Info Page Title');
    }

    async addFirstName(fname) {
        await this.first_name_textbox.fill(fname); 
        logger.info('Entered first name value');
    }

    async addLastName(lname) {
        await this.last_name_textbox.fill(lname);
        logger.info('Entered last name value');
    }

    async addZipCode(zipcode) {
        await this.zip_code_textbox.fill(zipcode);
        logger.info('Entered zip code value')
    }

    async checkCancelButton() {
        await expect(this.cancel_button).toBeVisible();
        logger.info('Check Cancel Button');
    }

    async clickContinueButton() {
        await expect(this.continue_button).toBeVisible();
        logger.info('Check Continue button');
        await this.continue_button.click();
        logger.info('Clicked Continue button');
    }
}