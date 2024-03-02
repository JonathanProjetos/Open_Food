import { Page } from 'puppeteer';

export const fieldTextNova = async (page: Page, id: string) => {
  try {
    const element = page.$(
      '#attributes_grid li:nth-last-child(2) a div .attr_text span',
    );

    if (element) {
      const novaTitle = await page.$eval(
        '#attributes_grid li:nth-last-child(2) a div .attr_text span',
        (el) => el.innerHTML.trim(),
      );
      const formatedNovaTitle = novaTitle.split(' ')[1];
      return formatedNovaTitle;
    }

    return '?';
  } catch (error) {
    console.log(error);
    await page.goto(`https://br.openfoodfacts.org/${id}`, {
      waitUntil: 'load',
    });
    return '?';
  }
};
