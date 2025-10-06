// combining login and accessibility fixtures
import { test as sauceLoginTest } from '../fixtures/sauceLoginFixture';
import { test as axeTest } from '../fixtures/axeTestFixture';
import { mergeTests } from '@playwright/test';

export const test = mergeTests(sauceLoginTest,axeTest);
export { expect } from '@playwright/test';
