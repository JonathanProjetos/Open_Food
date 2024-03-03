import { Page } from 'puppeteer';

// ------- Busco o score do campo nova do produto -------
export const fieldNovaScore = async (page: Page, id: string) => {
  try {
    // ------- Busco pelo elemento antes de executar -------
    const element = page.$(
      '#attributes_grid li:nth-last-child(2) a div .attr_text h4',
    );

    if (element) {
      const novaScore = await page?.$eval(
        '#attributes_grid li:nth-last-child(2) a div .attr_text h4',
        (el) => el?.innerHTML.trim(),
      );
      const formatedNovaScore = novaScore?.split(' ')[1];
      return formatedNovaScore;
    }
    // Se não encontrar o elemento e não gerar o error retorno um valor default '?'
    return '?';
  } catch (error) {
    console.error(error);
    // Em caso de erro devido à ausência de dados, tento acessar a página novamente para continuar a raspagem dos dados faltantes.
    await page.goto(`https://br.openfoodfacts.org/${id}`);
    // Em caso de erro devido à ausência de dados forneço um valor default '?'
    return '?';
  }
};
