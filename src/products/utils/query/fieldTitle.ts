import { Page } from 'puppeteer';
import { decode } from 'he';

export const fieldTitle = async (page: Page, id: string) => {
  try {
    const element = page.$('.title-1');

    if (element) {
      const title = await page.$eval('.title-1', (el) => el.innerHTML.trim());
      const titleDecoded = decode(title);
      return titleDecoded;
    }

    return '?';
  } catch (error) {
    console.error(error);
    await page.goto(`https://br.openfoodfacts.org/${id}`, {
      waitUntil: 'load',
    });
    return '?';
  }
};
