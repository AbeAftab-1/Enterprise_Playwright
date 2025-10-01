import {page, expect} from '@playwright/test';
import { ContactPage } from '../pages/contactPage';
import logger from "../utils/LoggerUtil";

exports.Homepage = class Homepage{
    constructor(page){
        //declare constructor
        this.page = page;
        this.click_service = page.getByRole('link', { name: 'Service' });
        this.page_heading = page.getByText('All Open Cases');
        this.contact_page = page.getByTitle('Contacts');
        this.Recently_Viewed_text = page.getByText('Recently Viewed');
    }

    async checkHeading(){
        // click on "Service" link on the left frame
        await this.click_service.click();
        // Verify "All Open Cases" text is displayed in the homepage
        await expect(this.page_heading).toBeVisible({
            timeout: 15000,
        }).catch((error) => {
            logger.error(`Error clicking Login button: $(error)`);
            throw error; // rethrow the error if needed
        }).then(() => logger.info("All Open Cases Text is visible"));   
    }

    async gotoContactsTab(){
        //Click on Contacts Tab
        await this.contact_page.click();
        // Verify "Recently Viewed" text is deplayed in Contacts Tab
        await expect(this.Recently_Viewed_text).toBeVisible();   
        logger.info("Contact Page is accessed"); 

        // Return contact page 
        const contPage = new ContactPage(this.page);
        return contPage;
    }
}