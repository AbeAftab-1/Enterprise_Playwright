// importing combined axeTest fixture and login fixture
import { test, expect } from '../fixtures/sauceFixtures';
// importing SauceCartPage
import { SauceCartPage } from '../pages/sauceCartPage';
// importing SauceBuyerInfoPage
import { SauceBuyerInfoPage } from '../pages/sauceBuyerInfoPage';
// importing SauceCheckoutOverviewPage
import { SauceCheckoutOverviewPage } from '../pages/sauceCheckoutOverviewpage';
// importing SauceOrderconfirmationPage
import { SauceOrderConfirmationPage } from '../pages/sauceOrderConfirmationPage';


// basic test to log into saucedemo.com
test('Sauce Demo - Add Fleece', async ({ page, saucePageLogin, makeAxeBuilder }) => {
    // Login and verify "Swag Labs" heading is displayed
    await saucePageLogin.checkHeading();

    // Add Fleece to Cart
    await saucePageLogin.addFleece();
    // Go to cart
    await saucePageLogin.goToCart();

    // Full page review of Cart Page
    const cartAccessibilityScanResults = await makeAxeBuilder()
        .analyze();
    // Assertion
    expect(cartAccessibilityScanResults.violations).toEqual([]);

    // declaring saucePageCart instance
    const saucePageCart = new SauceCartPage(page);
    // Check Cart Page Heading
    await saucePageCart.checkCartPageHeadding();
    // Check Continue button
    await saucePageCart.checkCartPageContinueShoppingButton();
    // Check Checkout button
    await saucePageCart.checkCartPageCheckoutButton();
    // Verify Remove button is visible to remove Fleece from Cart
    await saucePageCart.checkRemoveFleece();
    // Verify Fleece hyperlink exists
    await saucePageCart.checkProductLink('Sauce Labs Fleece Jacket');
    // Verify Fleece Price is displayed
    await saucePageCart.checkProductPrice('$49.99');
    // Click the Checkout button
    await saucePageCart.clickCartPageCheckoutButton();

    // Full page review of Buyer's Info Page
    const infoAccessibilityScanResults = await makeAxeBuilder()
        .analyze();
    // Assertion
    expect(infoAccessibilityScanResults.violations).toEqual([]);

    // Declaring saucePageInfo instance
    const saucePageInfo = new SauceBuyerInfoPage(page);
    // Check Buyer Info page heading
    await saucePageInfo.checkPageTitle();
    // Enter Buyer's first name
    await saucePageInfo.addFirstName('John');
    // Enter Buyer's last name
    await saucePageInfo.addLastName('Buyer');
    // Enter zip code
    await saucePageInfo.addZipCode('00000');
    // Check Cancel button
    await saucePageInfo.checkCancelButton();
    // Check and click Continue button
    await saucePageInfo.clickContinueButton();

    // Full page review of Checkout Overview Page
    const checkoutOverviewAccessibilityScanResults = await makeAxeBuilder()
        .analyze();
    // Assertion
    expect(checkoutOverviewAccessibilityScanResults.violations).toEqual([]);

    // Declaring saucePageCheckoutOV Instance
    const saucePageCheckOV = new SauceCheckoutOverviewPage(page);
    // Check Checkout Overview page title
    await saucePageCheckOV.checkPageTitle();
    // Check subtotal label
    await saucePageCheckOV.checkSubtotalLabel('Item total: $49.99');
    // Check Cancel button
    await saucePageCheckOV.checkCancelButton();
    // Check and Click Finish button
    await saucePageCheckOV.clickFinishButton();

    // Full page review of Confirmation Page
    const confirmationAccessibilityScanResults = await makeAxeBuilder()
        .analyze();
    // Assertion
    expect(confirmationAccessibilityScanResults.violations).toEqual([]);

    // Declaring saucePageConfirmation Instance
    const saucePageConfirmation = new SauceOrderConfirmationPage(page);
    // Check for Thank you text
    await saucePageConfirmation.checkThankYouText();
    // Check Order Confirmation text
    await saucePageConfirmation.checkOrderConfirmation();
    // Check and Click Back Home button
    await saucePageConfirmation.clickBackHomeButton();

    // Click on "Open Menu" button
    await saucePageLogin.clickMenuButton();
    // Click on "Logout" button
    await saucePageLogin.clickLogout();
});