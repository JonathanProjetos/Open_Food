import { Page } from 'puppeteer';

// ------- Busco o tamanho da porção do produto -------
export const filedServingSize = async (page: Page, id: string) => {
  try {
    // ------- Busco pelo elemento antes de executar -------
    const element = page.$('#panel_serving_size_content > div > div > div');

    if (element) {
      // Removo todos os espaços e quebras de linha
      const servingSizeText = await page?.$eval(
        '#panel_serving_size_content > div > div > div',
        (el) => el?.textContent?.trim()?.replace(/\s+|\n+/g, ' '),
      );
      const servigsSize = servingSizeText?.split(':')[1];
      return servigsSize;
    }
    // Se não encontrar o elemento e não gerar o error retorno um valor default '?'
    return '?';
  } catch (error) {
    console.error(error);
    // Em caso de erro devido à ausência de dados, tento acessar a página novamente para continuar a raspagem dos dados faltantes.
    await page.goto(`https://br.openfoodfacts.org/${id}`);
    return '?';
  }
};
