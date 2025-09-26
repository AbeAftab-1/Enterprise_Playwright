import {expect} from '@playwright/test';
import logger from "../utils/LoggerUtil";

exports.ContactPage = class ContactPage {
    constructor(page){
       // declare constructor 
        this.page = page;
        this.newContactButton = page.getByRole('button', { name: 'New' });
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.accountNameTexbox = page.getByRole('combobox', { name: '*Account Name' });
        this.accountName = page.getByPlaceholder('Search Accounts...');
        this.selectAccountName = page.getByLabel('New Contact');
        this.saveButton = page.getByRole('button', { name: 'Save', exact: true });
        this.concatenatedName = page.locator('records-highlights2');
    }

    async createNewContact(fname,lname,accname){
        // Click "New" button in Contact Tab
        await this.newContactButton.click();
        logger.info("New button is clicked");
        // Enter First Name in the First Name field
        await this.firstName.fill(fname);
        logger.info("Enter First Name");
        // Enter Last Name in the Last Name field
        await this.lastName.fill(lname);
        logger.info("Enter Last Name");
        // Select Account Name
        await this.accountNameTexbox.click();
        await this.accountName.fill(accname);
        await this.selectAccountName.getByText(accname, { exact: true }).click();
        logger.info("Account Name is selected")
        // Click on "Save" button
        await this.saveButton.click();   
        logger.info("Save button is click")    
    }

    async verifyContactName(fname,lname){
        // Verify first name and last name are displayed as concatinated
        await expect(this.concatenatedName).toContainText(`${fname} ${lname}`);
        logger.info("Verified full name");
    }
}