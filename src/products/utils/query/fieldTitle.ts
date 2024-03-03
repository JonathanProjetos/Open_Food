import { Page } from 'puppeteer';
import { decode } from 'he';

// ------- Busco o título do produto -------
// Faço uso da função decode para decodificar os caracteres especiais.

export const fieldTitle = async (page: Page, id: string) => {
  try {
    // ------- Busco pelo elemento antes de executar -------
    const element = page.$('.title-1');

    if (element) {
      const title = await page?.$eval('.title-1', (el) => el?.innerHTML.trim());
      const titleDecoded = decode(title);
      return titleDecoded;
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
