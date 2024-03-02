import { Page } from 'puppeteer';

export const linkArray = async (page: Page) => {
  try {
    const element = await page.$('#search_results div div ul li a');

    if (element) {
      const links = await page.$$eval('#search_results div div ul li a', (el) =>
        el.map((a) => a.href),
      );
      return links;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};
