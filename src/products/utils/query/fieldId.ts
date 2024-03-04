import { Page } from 'puppeteer';

export const fieldId = async (page: Page) => {
  try {
    const element = page.$('#barcode');

    if (element) {
      const id = await page.$eval('#barcode', (el) => el?.textContent.trim());
      console.log(id);
      return id;
    }
  } catch (error) {
    console.error(error);
  }
};
