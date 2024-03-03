import { Page } from 'puppeteer';

// Busco as informações na tabela de valores calóricos

/* 
  Primeiro busco por todas as informações da tabela de valores calóricos. O formato retornado e como no exempo abaixo:
  [
    'Energia',
    '2.230 kj(535 kcal)',
    '446 kj(107 kcal)',
    '+119%',
    .......
  ]
  
  Após a obtenção dos valores, crio um objeto para armazenar os valores de cada coluna.
  Quando inicio a interação no loop (for), acesso cada linha (row) e obtenho os valores de cada coluna, armazenando-os em um objeto.
  Pulo 4 posições para acessar a próxima row. Até que a lista acabe.
*/
export const fieldCaloricValueTable = async (page: Page, id: string) => {
  try {
    // Busco pelo elemento antes de executar
    const element = await page.$('tbody td span');

    if (element) {
      const rowTextTable = await page?.$$eval('tbody td span', (el) => {
        const row = el?.map((td) => td?.textContent.trim());
        return row;
      });

      const rowList = rowTextTable;

      const data = {};

      for (let i = 0; i < rowList.length; i += 4) {
        const categoria = rowList[i];
        const per100g = rowList[i + 1];
        const perServing = rowList[i + 2];
        data[categoria] = { per100g, perServing };
      }
      return data;
    }
    // Se não encontrar o elemento e não gerar o error retorno um valor default {}
    return {};
  } catch (error) {
    console.error(error);
    // Em caso de erro devido à ausência de dados, tento acessar a página novamente para continuar a raspagem dos dados faltantes.
    await page.goto(`https://br.openfoodfacts.org/${id}`);
    return {};
  }
};
