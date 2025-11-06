import { page, expect} from '@playwright/test';
import logger, { Logger } from '../utils/LoggerUtil';

exports.SauceIndividualProductPage = class SauceIndividualProductPage {
    // Declaring Constructor
    constructor(page) {
        this.page = page;
        this.inventory_item_name = page.locator('[data-test="inventory-item-name"]');
        this.add_to_cart_button = page.locator('[data-test="add-to-cart"]');
        this.back_to_products_link = page.locator('[data-test="back-to-products"]');
    }

    // Verify Product Name in Individual Product Page
    async verifyProductName(prodname) {
        await expect(this.inventory_item_name).toContainText(prodname);
        logger.info('Verified product name in individual product page');
    }

    // Add product to cart in Individual Product Page
    async addProductInIndividualProdPage() {
        await expect( this.add_to_cart_button).toBeVisible();
        await  this.add_to_cart_button.click();
        logger.info('Added product to cart in Individual Product Page');
    }

    // Navigate to Products Page
    async backToProductPage() {
        await this.back_to_products_link.click();
        logger.info('Navigated back to Products Page');
    }

}