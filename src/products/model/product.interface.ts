type score = {
  score: string;
  title: string;
};

type nova = {
  score: number;
  title: string;
};

export interface Product {
  id: string;
  name: string;
  nutrition: score;
  nova: nova;
}

interface Ingredientes {
  hasPalmOil: string;
  isVegan: boolean;
  isVegetarian: boolean;
  list: string[];
}

interface ValorNutricional {
  score: string;
  values: [string, string][];
  servingSize: string;
  data: {
    [categoria: string]: {
      per100g: string;
      perServing: string;
    };
  };
}

export interface ProductDetail {
  title: string;
  quantity: string;
  ingredients: Ingredientes;
  nutrition: ValorNutricional;
  nova: nova;
}
