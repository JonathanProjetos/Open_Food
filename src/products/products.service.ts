import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import { Product, ProductDetail } from './model/product.interface';
import query from './utils/query';

@Injectable()
export class ProductsService {
  async getProducts(nutrition: string, nova: string): Promise<Product[]> {
    // ------- Iniciando o browser -------
    const browser = await puppeteer.launch({ headless: true });

    // ------- Abrindo uma nova página -------
    const page = await browser.newPage();

    // ------- Acessando a página -------
    await page.goto('https://br.openfoodfacts.org/');

    // ------- Esperando o elemento da página -------
    await page.waitForSelector('#search_results');

    // ------- Pegando o link dos produtos da primeira página -------

    const productLinks = await query.linkArray(page);

    // ------ Lista de Produtos -------

    const listObjectProducts: Product[] = [];

    let count = 0;

    for (const link of productLinks) {
      console.log(`Acessando a página de detalhes: ${link}`);
      await page.goto(link, { waitUntil: 'networkidle0' });

      await page.waitForSelector('.title-1');

      // ------- Pegando o id do produto -------

      const id = await query.fieldId(page);

      // ------- Pegando o título do produto -------

      const title = await query.fieldTitle(page, id);

      // ------- Pegando o título da nutrição -------

      const nutritionTitle = await query.fieldTextScore(page);

      // ------- Pegando o score da nutrição -------

      const noteOfNutrition = await query.filedNutritionAssessmentNote(
        page,
        id,
      );

      // ------- Pegando o score do nova -------

      const novaScore = await query.fieldNovaScore(page, id);

      // ------- Pegando título do score do nova -------

      const textNova = await query.fieldTextNova(page, id);

      // ------- Criando o objeto do produto -------
      const product = {
        id,
        name: title,
        nutrition: {
          score: noteOfNutrition,
          title: nutritionTitle,
        },
        nova: {
          score: novaScore,
          title: textNova,
        },
      } as unknown as Product;

      listObjectProducts.push(product);

      console.log(product);

      count++;

      // ----------------- Limitando a quantidade de produtos -----------------

      if (count === 20) {
        console.log('Limite de 20 produtos atingido');
        break;
      }
    }

    await browser.close();

    // ------- Filtrando a lista de produtos -------

    if (!nutrition || !nova) {
      return listObjectProducts as unknown as Product[];
    } else {
      const filterListProductsForParams = listObjectProducts.filter(
        (p) =>
          p?.nutrition?.score === nutrition.toLocaleUpperCase() &&
          p?.nova?.score === Number(nova),
      );
      console.log(filterListProductsForParams);
      return filterListProductsForParams as unknown as Product[];
    }
  }

  async getProductById(id: any): Promise<ProductDetail> {
    // ------- Iniciando o browser -------
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--lang=pt-BR'],
    });

    // ------- Abrindo uma nova página -------
    const page = await browser.newPage();

    // ------- Acessando a página -------
    await page.goto('https://br.openfoodfacts.org/');

    // ------- Esperando o elemento da página -------

    await page.waitForSelector('#search_results');

    // ------- Pegando o link dos produtos da primeira página -------

    const link = await query.filterPageLinksById(page, id);

    // ------- Acessando a página de detalhes do produto vinculado ao id -------

    console.log(`Acessando a página de detalhes: ${link}`);
    await page.goto(link, { waitUntil: 'networkidle0' });

    // ------- Esperando o título do produto estar presente na página -------

    await page.waitForSelector('.title-1');

    // ------- Pegando o titulo do produto -------

    const title = await query.fieldTitle(page, id);

    // ------- Pegando a informação de quantity -------

    const quantity = await query.fieldQuantity(page, id);

    // ----- pegando os ingredients e a lista de ingredintes -------

    const ingredients = await query.fieldIngredientsAndListIngredients(
      page,
      id,
    );

    // ------- Pegando a nota de score da nutrição -------

    const noteOfNutrition = await query.filedNutritionAssessmentNote(page, id);

    // ------- Pegando os values -------

    const values = await query.arrayOfCalorieRatingTierList(page, id);

    // ------ Pegando o valor da porção -------

    const servigsSize = await query.filedServingSize(page, id);

    // ------- Pegando os valores Energeticos -------

    const data = await query.fieldCaloricValueTable(page, id);

    // ------- Criando o objeto nutrition -------

    const nutrition = {
      score: noteOfNutrition,
      values,
      servigsSize,
      data,
    };

    // ------- Pegando valor do score do campo nova -------

    const novaScore = await query.fieldNovaScore(page, id);

    // ------- Pegando o título do score do campo nova -------

    const textNova = await query.fieldTextNova(page, id);

    // ------ Crinado um objeto nova -------

    const nova = {
      score: novaScore,
      title: textNova,
    };

    // ------- Crinado Objeto de Resposta -------

    const product = {
      title,
      quantity,
      ingredients,
      nutrition,
      nova,
    };

    await browser.close();

    return product as unknown as ProductDetail;
  }
}
