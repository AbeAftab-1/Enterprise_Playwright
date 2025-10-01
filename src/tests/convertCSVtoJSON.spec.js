import { test, expect } from '@playwright/test';
import { convertCsvFileToJsonFile } from "../utils/CsvtoJsonUtil";

// Remove ".skip" to run this test
test.skip("csv to json", async () => {
  convertCsvFileToJsonFile("../data/contData.csv", "../data/datademo.json");
});