import { Page } from 'puppeteer';

/* 
  Busco os valores de nutrientes do produto
  Exemplo no campo onde tem a frase: Gorduras/lípidos em quantidade baixa (0%)

  Faço a divisão da string pelo caractere '('. Removo os espaço finail e inicial e pego a última palavra da string, que neste caso é 'baixa'.
            
*/
export const arrayOfCalorieRatingTierList = async (page: Page, id: string) => {
  try {
    // ------- Busco pelo elemento antes de executar -------
    const element = await page.$('#panel_nutrient_levels_content a h4');

    if (element) {
      const arrayOfValuesInformation = await page?.$$eval(
        '#panel_nutrient_levels_content a h4',
        (el) => el?.map((td) => td?.textContent.trim()),
      );

      const createListValues = arrayOfValuesInformation?.map((v) => {
        //filtro as informações das strings em busca de baixa, moderada e alta e converto para low, moderate e high
        const phrase = v?.split('(')[0]?.trim()?.split(' ');
        const value = phrase[phrase.length - 1];
        const list = [];
        if (value === 'baixa') {
          list.push('low', v);
        } else if (value === 'moderada') {
          list.push('moderate', v);
        } else if (value === 'alta') {
          list.push('high', v);
        }

        return list;
      });

      const values = [...createListValues];
      return values;
    }
    // Se não encontrar o elemento e não gerar o error retorno um valor default []
    return [];
  } catch (err: any) {
    console.error(err);
    // Em caso de erro devido à ausência de dados, tento acessar a página novamente para continuar a raspagem dos dados faltantes.
    await page.goto(`https://br.openfoodfacts.org/${id}`);
    return [];
  }
};
