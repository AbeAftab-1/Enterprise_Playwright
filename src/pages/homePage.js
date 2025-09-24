import {page, expect} from '@playwright/test';

exports.Homepage = class Homepage{
    constructor(page){
        //declare constructor
        this.page = page;
        this.page_heading = page.getByText('All Open Cases');
    }

    async checkHeading(){
        // Verify "All Open Cases" text is displayed in the homepage
        await expect(this.page_heading).toBeVisible({timeout: 15000});   
    }
}