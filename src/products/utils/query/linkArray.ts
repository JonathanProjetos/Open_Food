import { Page } from 'puppeteer';

// ------- Busco os links da página -------
export const linkArray = async (page: Page) => {
  try {
    // ------- Busco pelo elemento antes de executar -------
    const element = await page.$('#search_results div div ul li a');

    if (element) {
      const links = await page?.$$eval(
        '#search_results div div ul li a',
        (el) => el?.map((a) => a?.href),
      );
      return links;
    }
  } catch (error) {
    console.log(error);
    // Em caso de erro devido à ausência de dados forneço um array vazio.
    return [];
  }
};
