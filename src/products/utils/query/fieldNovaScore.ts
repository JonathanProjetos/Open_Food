import { Page } from 'puppeteer';

export const fieldNovaScore = async (page: Page, id: string) => {
  try {
    const element = page.$(
      '#attributes_grid li:nth-last-child(2) a div .attr_text h4',
    );

    if (element) {
      const novaScore = await page.$eval(
        '#attributes_grid li:nth-last-child(2) a div .attr_text h4',
        (el) => el.innerHTML.trim(),
      );
      const formatedNovaScore = novaScore.split(' ')[1];
      return formatedNovaScore;
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
