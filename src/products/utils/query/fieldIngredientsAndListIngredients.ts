import { Page } from 'puppeteer';

// ------- Busco os ingredientes e a lista de ingredientes -------
export const fieldIngredientsAndListIngredients = async (
  page: Page,
  id: string,
) => {
  console.log('ingredientes', id);
  try {
    // ------- Busco pelo elemento antes de executar -------
    const element = page.$(
      '#panel_ingredients_analysis_content > ul:nth-last-child(4)  h4',
    );

    if (element) {
      const hasPalmOil = await page?.$eval(
        '#panel_ingredients_analysis_content > ul:nth-last-child(4)  h4',
        (el) => el?.textContent.trim(),
      );

      const vegan = await page?.$eval(
        '#panel_ingredients_analysis_content > ul:nth-last-child(3)  h4',
        (el) => el?.className.includes('good'),
      );

      const vegetarian = await page?.$eval(
        '#panel_ingredients_analysis_content > ul:nth-last-child(2)  h4',
        (el) => el?.className.includes('good'),
      );

      // ------- Pegando a lista de ingredientes -------

      const ingredientsList = await page?.$eval('.panel_text', (el) =>
        el?.textContent
          .replace(/\s+|\n+|\.|\:/g, ' ')
          .toLocaleLowerCase()
          .split(',')
          .map((i) => i.trim()),
      );

      console.log(ingredientsList);

      // -------- Criando o objeto de ingredientes -------

      const ingredients = {
        hasPalmOil: hasPalmOil,
        isVegan: vegan,
        isVegetarian: vegetarian,
        list: ingredientsList,
      };

      return ingredients;
    }
    // Se não encontrar o elemento e não gerar o error retorno um valor default '{}'
    return {};
  } catch (e: any) {
    console.error(e);
    // Retornoo um objeto com valores default '?' em caso de erro
    const ingredients = {
      hasPalmOil: '?',
      isVegan: '?',
      isVegetarian: '?',
      list: '?',
    };
    // Em caso de erro devido à ausência de dados, tento acessar a página novamente para continuar a raspagem dos dados faltantes.
    await page.goto(`https://br.openfoodfacts.org/${id}`);
    return ingredients;
  }
};
