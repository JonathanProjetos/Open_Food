import { Page } from 'puppeteer';
import { decode } from 'he';

export const fieldQuantity = async (page: Page, id: string) => {
  try {
    const element = page.$('#field_quantity > #field_quantity_value');

    if (element) {
      const quantity = await page.$eval(
        '#field_quantity > #field_quantity_value',
        (el) => el.innerHTML.trim(),
      );
      const quantityTextDecoded = decode(quantity);
      return quantityTextDecoded;
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
