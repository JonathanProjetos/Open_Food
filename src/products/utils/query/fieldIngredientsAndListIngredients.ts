import { Page } from 'puppeteer';

export const fieldIngredientsAndListIngredients = async (
  page: Page,
  id: string,
) => {
  try {
    const element = page.$(
      '#panel_ingredients_analysis_content > ul:nth-last-child(4)  h4',
    );

    if (element) {
      const hasPalmOil =
        (await page?.$eval(
          '#panel_ingredients_analysis_content > ul:nth-last-child(4)  h4',
          (el) => el?.textContent?.trim(),
        )) ?? 'unknown';

      const vegan =
        (await page?.$eval(
          '#panel_ingredients_analysis_content > ul:nth-last-child(3)  h4',
          (el) => el?.className?.includes('good'),
        )) ?? 'unknown';

      const vegetarian =
        (await page?.$eval(
          '#panel_ingredients_analysis_content > ul:nth-last-child(2)  h4',
          (el) => el?.className?.includes('good'),
        )) ?? 'unknown';

      // ------- Pegando a lista de ingredientes -------

      const ingredientsList = await page?.$eval('.panel_text', (el) =>
        el?.textContent?.replace(/\s+|\n+/g, ' ').split(','),
      );

      // -------- Criando o objeto de ingredientes -------

      const ingredients = {
        hasPalmOil: hasPalmOil && hasPalmOil,
        isVegan: vegan && vegan,
        isVegetarian: vegetarian && vegetarian,
        list: ingredientsList,
      };

      return ingredients;
    }
    return {};
  } catch (e: any) {
    console.error(e);

    const ingredients = {
      hasPalmOil: '?',
      isVegan: '?',
      isVegetarian: '?',
      list: '?',
    };
    await page.goto(`https://br.openfoodfacts.org/${id}`, {
      waitUntil: 'load',
    });
    return ingredients;
  }
};
