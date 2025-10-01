    // combining login and accessiblity fixtures
    import { mergeTests } from '@playwright/test';
    import { test as loginTest } from '../fixtures/loginFixture';
    import { test as axeTest } from '../fixtures/axeTestFixture';

    // declaring test for combined fixtures
    export const test = mergeTests(loginTest, axeTest);
    export { expect } from '@playwright/test'; // Re-export expect