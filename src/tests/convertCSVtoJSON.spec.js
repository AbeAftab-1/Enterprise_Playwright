import { test, expect } from '@playwright/test';
import { convertCsvFileToJsonFile } from "../utils/CsvtoJsonUtil";

test.skip("csv to json", async () => {
  convertCsvFileToJsonFile("../data/contData.csv", "../data/datademo.json");
});