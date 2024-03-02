import { Page } from 'puppeteer';

export const filterPageLinksById = async (page: Page, id: string) => {
  try {
    const element = page.$('#search_results div div ul li a');

    if (element) {
      const productsLinks = await page.$$eval(
        '#search_results div div ul li a',
        (el) => el.map((a) => a.href),
      );
      const link = productsLinks.filter((p) => p.includes(id))[0];
      return link;
    }
    return '?';
  } catch (error) {
    console.error(error);
  }
};
