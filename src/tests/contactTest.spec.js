import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import cdata from "../data/contacts.json";
import { decrypt, encrypt } from '../utils/CryptojsUtil';


for (const contacts of cdata) {
    // Remove ".skip" to run this test
    test.skip(`New Contact for ${contacts.firstname}`, async ({ page }) => {
        // declare Contact values
        // const fname = "Larry";
        // const lname = "Smith";
        const accname = "test";

        // declare login to intiate new LoginPage class object
        const login = new LoginPage(page);
        // go to base URL
        await login.gotoLoginPage();
        // enterUseridPassword method to enter userid and password
        await login.enterUseridPassword(decrypt(process.env.userid), decrypt(process.env.password));

        // click login button and save homepage return value
        const homepage = await login.login();
        // check correct heading is displayed
        await homepage.checkHeading();

        // Go to Contact Tab and check "Recently Viewed" text displayed
        const ContactPage = await homepage.gotoContactsTab();
        // Enter new Contact and verify the new contact 
        await ContactPage.createNewContact(contacts.firstname, contacts.lastname, accname);
        await ContactPage.verifyContactName(contacts.firstname, contacts.lastname);
    })

};

