import { Page } from 'puppeteer';

export const fieldCaloricValueTable = async (page: Page, id: string) => {
  try {
    const element = await page.$('tbody td span');

    if (element) {
      const energyText = await page.$$eval('tbody td span', (el) => {
        const energy = el.map((td) => td.textContent.trim());
        return energy;
      });

      const energy = energyText;

      const data = {};

      for (let i = 0; i < energy.length; i += 4) {
        const categoria = energy[i];
        const per100g = energy[i + 1];
        const perServing = energy[i + 2];
        data[categoria] = { per100g, perServing };
      }
      return data;
    }
  } catch (error) {
    console.error(error);
    await page.goto(`https://br.openfoodfacts.org/${id}`, {
      waitUntil: 'load',
    });
    return [];
  }
};
