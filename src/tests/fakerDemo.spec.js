import { test } from '@playwright/test';
import { demoOutput } from '../utils/fakerSample';
import { exportToCsv, exportToJson, generateTestData } from "../utils/FakerDataUtil";


test.skip("demo faker", async () => { 

  console.log(demoOutput)

 });


test.skip("Faker", async ({ page }) => { 

  // Generate test data
const testData = generateTestData(3);

// Export data to JSON file
exportToJson(testData, 'testData_en.json');

// Export data to CSV file
exportToCsv(testData, 'testData_en.csv');

 });