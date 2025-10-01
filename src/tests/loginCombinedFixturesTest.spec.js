// importing combined axeTest fixture and login fixture
import {test, expect} from '../fixtures/combinedFixtures';

test('login and accessiblity with combined custom fixture', async ({landingPage, makeAxeBuilder }) => {
    // check correct heading is displayed post login in landing page (service page)
    await landingPage.checkHeading();

    // Full page review
    const homeAccessibilityScanResults = await makeAxeBuilder()
        .analyze();
    // Assertion
    expect(homeAccessibilityScanResults.violations).toEqual([]);
});