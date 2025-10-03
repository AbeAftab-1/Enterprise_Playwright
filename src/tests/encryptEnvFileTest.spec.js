import { test, expect } from '@playwright/test';
import { encryptEnvFile, decryptEnvFile } from '../utils/EncryptEnvFile';

// remove .skip to encrypt file
test.skip('Encrypt config/.env file', async ({page}) => {
    // Encrypt config/.env file
    encryptEnvFile();

    // Decrypt config/.env file
    //decryptEnvFile();

});