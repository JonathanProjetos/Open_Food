import { Page } from 'puppeteer';

export const filedServingSize = async (page: Page, id: string) => {
  try {
    // ------- Pegando o tamanho da porção -------
    const element = page.$('#panel_serving_size_content > div > div > div');

    if (element) {
      const servingSizeText = await page.$eval(
        '#panel_serving_size_content > div > div > div',
        (el) => el.textContent.trim().replace(/\s+|\n+/g, ' '),
      );
      const servigsSize = servingSizeText && servingSizeText.split(':')[1];
      return servigsSize;
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
