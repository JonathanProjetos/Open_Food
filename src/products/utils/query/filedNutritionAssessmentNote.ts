import { Page } from 'puppeteer';

// ------- Busco a nota de avaliação nutricional do produto -------
export const filedNutritionAssessmentNote = async (page: Page, id: string) => {
  try {
    // ------- Busco pelo elemento antes de executar -------
    const element = page.$('#attributes_grid li a div .attr_text h4');

    if (element) {
      const textNutrition = await page?.$eval(
        '#attributes_grid li a div .attr_text h4',
        (el) => el?.innerHTML?.trim(),
      );

      const formatedtextNutrition = textNutrition?.split(' ')[1];

      return formatedtextNutrition;
    }
    // Se não encontrar o elemento e não gerar o error retorno um valor default '?'
    return '?';
  } catch (e: any) {
    console.error(e);
    // Em caso de erro devido à ausência de dados, tento acessar a página novamente para continuar a raspagem dos dados faltantes.
    await page.goto(`https://br.openfoodfacts.org/${id}`);
    return '?';
  }
};
