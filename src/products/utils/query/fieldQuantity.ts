import { Page } from 'puppeteer';
import { decode } from 'he';

// ------- Busco a quantidade do produto -------
export const fieldQuantity = async (page: Page, id: string) => {
  try {
    // ------- Busco pelo elemento antes de executar -------
    const element = page.$('#field_quantity > #field_quantity_value');

    if (element) {
      const quantity = await page?.$eval(
        '#field_quantity > #field_quantity_value',
        (el) => el?.innerHTML.trim(),
      );
      const quantityTextDecoded = decode(quantity);
      return quantityTextDecoded;
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
