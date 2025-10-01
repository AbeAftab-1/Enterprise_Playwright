import { test, expect } from '@playwright/test';

// basic test to log into saucedemo.com
test('Basic login for Sauce Demo', async ({ page }) => {
    // open saucedemo.com
    await page.goto('https://www.saucedemo.com/');
    // Enter user name
    await page.locator('[data-test="username"]').fill('standard_user');
    // Enter password
    await page.locator('[data-test="password"]').fill('secret_sauce');
    // Click "Login" button
    await page.locator('[data-test="login-button"]').click();
    // Verify "Swag Labs" heading is displayed
    await expect(page.getByText('Swag Labs')).toBeVisible();
    // Click on "Open Menu" button
    await page.getByRole('button', { name: 'Open Menu' }).click();
    // Click on "Logout" button
    await page.locator('[data-test="logout-sidebar-link"]').click();
});