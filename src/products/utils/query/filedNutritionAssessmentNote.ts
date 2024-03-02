import { Page } from 'puppeteer';

export const filedNutritionAssessmentNote = async (page: Page, id: string) => {
  try {
    const element = page.$('#attributes_grid li a div .attr_text h4');

    if (element) {
      const textNutrition = await page.$eval(
        '#attributes_grid li a div .attr_text h4',
        (el) => el.innerHTML.trim(),
      );

      const formatedtextNutrition =
        textNutrition && textNutrition.split(' ')[1];

      return formatedtextNutrition;
    }
    return '?';
  } catch (e: any) {
    console.error(e);
    await page.goto(`https://br.openfoodfacts.org/${id}`, {
      waitUntil: 'load',
    });
    return '?';
  }
};
