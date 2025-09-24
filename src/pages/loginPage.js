import {page, expect} from '@playwright/test';
import { Homepage } from '../pages/homePage';

exports.LoginPage = class LoginPage {
    constructor(page) {
        // declare constructor 
        this.page = page;
        this.username_textbox = page.getByRole('textbox', { name: 'Username' });
        this.password_textbox = page.getByRole('textbox', { name: 'Password' });
        this.login_button = page.getByRole('button', { name: 'Log In' });
    }

    async gotoLoginPage() {
        // Go to baseURL from playwright.config.js which is https://login.salesforce.com/
        await this.page.goto('/');
    }

    async login(username, password) {
        // Click on Username field in the login page
        await this.username_textbox.click();
        // Enter userid in the Username field
        await this.username_textbox.fill(username);
        // Click on Password field in the login page
        await this.password_textbox.click();
        // Enter password in the Password field
        await this.password_textbox.fill(password);
        // Click on Login button
        await this.login_button.click();
        // call Homepage class
        const homepage = new Homepage(this.page);
        return homepage;
    }

}
