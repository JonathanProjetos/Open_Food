import { Page } from 'puppeteer';

export const arrayOfCalorieRatingTierList = async (page: Page, id: string) => {
  try {
    const element = await page.$('#panel_nutrient_levels_content a h4');

    if (element) {
      const arrayOfValuesInformation = await page.$$eval(
        '#panel_nutrient_levels_content a h4',
        (el) => el.map((td) => td.textContent.trim()),
      );

      const createListValues =
        arrayOfValuesInformation &&
        arrayOfValuesInformation.map((v) => {
          //filtro as informações das strings em busca de baixa, moderada e alta e converto para low, moderate e high
          const phrase = v.split('(')[0].trim().split(' ');
          const value = phrase[phrase.length - 1];
          const list = [];
          if (value === 'baixa') {
            list.push('low', v);
          } else if (value === 'moderada') {
            list.push('moderate', v);
          } else if (value === 'alta') {
            list.push('high', v);
          }

          return list;
        });

      const values = [...createListValues];
      return values;
    }
    return [];
  } catch (err: any) {
    console.error(err);
    await page.goto(`https://br.openfoodfacts.org/${id}`, {
      waitUntil: 'load',
    });
    return [];
  }
};
