// importing combined axeTest fixture and login fixture
import { test, expect } from '../fixtures/sauceFixtures';
// importing SauceCartPage
import { SauceCartPage } from '../pages/sauceCartPage';
// importing SauceBuyerInfoPage ( with SauceCheckoutOverviewPage and SauceOrderconfirmationPage using chaining pages)
import { SauceBuyerInfoPage } from '../pages/sauceBuyerInfoPage';


test('Sauce Demo - Add products in individual product pages', async ({ page, saucePageLogin, makeAxeBuilder }) => {
    // Login and verify "Swag Labs" heading is displayed
    await saucePageLogin.checkHeading();

    // Add Fleece from Fleece Page
    const fleecePage = await saucePageLogin.goToFleecePage();
    await fleecePage.addProductInIndividualProdPage();
    await fleecePage.backToProductPage();

    // Add Backpack in Backpack Page
    const backpackPage = await saucePageLogin.goToBackpackPage();
    await backpackPage.addProductInIndividualProdPage();
    await backpackPage.backToProductPage();

    // Add Bike Light in Bike Light Page
    const bikeLightPage = await saucePageLogin.goToBikeLightPage();
    await bikeLightPage.addProductInIndividualProdPage();
    await bikeLightPage.backToProductPage();

    // Add T Shirt in T Shirt Page
    const tShirtPage = await saucePageLogin.goToTShirtPage();
    await tShirtPage.addProductInIndividualProdPage();
    await tShirtPage.backToProductPage();

    // Add Onesie in Onesie Page
    const onesiePage = await saucePageLogin.goToOnesiePage();
    await onesiePage.addProductInIndividualProdPage();
    await onesiePage.backToProductPage();

    // Add Red T Shirt in Red T Shirt Page
    const redTShirtPage = await saucePageLogin.goToRedTShirtPage();
    await redTShirtPage.addProductInIndividualProdPage();
    await redTShirtPage.backToProductPage();

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
    // Verify Remove button is visible to remove Backpack from Cart
    await saucePageCart.checkRemoveBackpack();
    // Verify Remove button is visible to remove Bike Light from Cart
    await saucePageCart.checkRemoveBikeLight();
    // Verify Remove button is visible to remove Bolt T-Shirt from Cart
    await saucePageCart.checkRemoveBoltTshirt();
    // Verify Remove button is visible to remove Onesie from Cart
    await saucePageCart.checkRemoveOnesie();
    // Verify Remove button is visible to remove Red T-Shirt from Cart
    await saucePageCart.checkRemoveRedTshirt();

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
    await saucePageInfo.addFirstName('Al');
    // Enter Buyer's last name
    await saucePageInfo.addLastName('Buyer');
    // Enter zip code
    await saucePageInfo.addZipCode('12345');
    // Check Cancel button
    await saucePageInfo.checkCancelButton();
    // Check and click Continue button and Declaring saucePageCheckoutOV Instance
    const saucePageCheckOV = await saucePageInfo.clickContinueButton();

    // Full page review of Checkout Overview Page
    const checkoutOverviewAccessibilityScanResults = await makeAxeBuilder()
        .analyze();
    // Assertion
    expect(checkoutOverviewAccessibilityScanResults.violations).toEqual([]);

    // Check Checkout Overview page title
    await saucePageCheckOV.checkPageTitle();

    // Check Cancel button
    await saucePageCheckOV.checkCancelButton();
    // Check and Click Finish button and initialize saucePageConfirmation
    const saucePageConfirmation = await saucePageCheckOV.clickFinishButton();

    // Full page review of Confirmation Page
    const confirmationAccessibilityScanResults = await makeAxeBuilder()
        .analyze();
    // Assertion
    expect(confirmationAccessibilityScanResults.violations).toEqual([]);

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