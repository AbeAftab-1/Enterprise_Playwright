import { test, expect } from '../fixtures/loginFixture';

// Remove ".skip" to run this test
test.skip('Log into SalesForce using Fixture', async ({ landingPage }) => {
    // check correct heading is displayed
    await landingPage.checkHeading();
});

