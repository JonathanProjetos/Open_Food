import { Page } from 'puppeteer';

// ------- Busco o score do produto -------
export const fieldTextScore = async (page: Page) => {
  try {
    // ------- Busco pelo elemento antes de executar -------
    const element = page.$('#attributes_grid li a div .attr_text span');

    if (element) {
      const nutritionTitle = await page?.$eval(
        '#attributes_grid li a div .attr_text span',
        (el) => el?.innerHTML.trim(),
      );
      return nutritionTitle;
    }
    // Se não encontrar o elemento e não gerar o error retorno um valor default '?'
    return '?';
  } catch (error) {
    console.error(error);
    // Em caso de erro devido à ausência de dados forneço um valor default '?'
    return '?';
  }
};
