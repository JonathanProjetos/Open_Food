import { Page } from 'puppeteer';

export const fieldTextScore = async (page: Page) => {
  try {
    const nutritionTitle = await page.$eval(
      '#attributes_grid li a div .attr_text span',
      (el) => el.innerHTML.trim(),
    );
    return nutritionTitle;
  } catch (error) {
    console.error(error);
    return '?';
  }
};
