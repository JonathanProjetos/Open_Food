import { Page } from 'puppeteer';

// ------- Busco os links da página e filtro pelo id fornecido -------
export const filterPageLinksById = async (page: Page, id: string) => {
  try {
    // ------- Busco pelo elemento antes de executar -------
    const element = page.$('#search_results div div ul li a');

    if (element) {
      const productsLinks = await page?.$$eval(
        '#search_results div div ul li a',
        (el) => el?.map((a) => a?.href),
      );
      const link = productsLinks?.filter((p) => p?.includes(id))[0];
      return link;
    }
    // Se não encontrar o elemento e não gerar o error retorno um valor default '?'
    return '?';
  } catch (error) {
    console.error(error);
  }
};
