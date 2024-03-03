import { Page } from 'puppeteer';

// ------- Busco o Texto do campo nova do produto -------
export const fieldTextNova = async (page: Page, id: string) => {
  try {
    const element = page.$(
      '#attributes_grid li:nth-last-child(2) a div .attr_text span',
    );

    // ------- Busco pelo elemento antes de executar -------
    if (element) {
      const novaTitle = await page?.$eval(
        '#attributes_grid li:nth-last-child(2) a div .attr_text span',
        (el) => el?.innerHTML.trim(),
      );
      const formatedNovaTitle = novaTitle?.split(' ')[1];
      return formatedNovaTitle;
    }
    // Se não encontrar o elemento e não gerar o error retorno um valor default '?'
    return '?';
  } catch (error) {
    console.log(error);
    // Em caso de erro devido à ausência de dados, tento acessar a página novamente para continuar a raspagem dos dados faltantes.
    await page.goto(`https://br.openfoodfacts.org/${id}`);
    // Em caso de erro devido à ausência de dados forneço um valor default '?'
    return '?';
  }
};
