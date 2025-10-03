import { test, expect } from '@playwright/test';
import { encryptEnvFile, decryptEnvFile } from '../utils/EncryptEnvFile';

test('Encrypt config/.env file', async ({page}) => {
    // Encrypt config/.env file
    encryptEnvFile();

    // Decrypt config/.env file
    //decryptEnvFile();

});