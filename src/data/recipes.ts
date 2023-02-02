import { ImageProps } from "react-native";


export interface Recipes {
  id: number;
  name: string;
  time: string;
  portions: string;
  image: any;
  recipe: string;
  directions: string;
  sort: string;
  handleNavigate?: () => void;
}
const burger = require("@assets/burger.png");
const potato = require("@assets/potato.png");
const omelette = require("@assets/omelette.png")
const bacon_and_egss = require("@assets/bacon_and_eggs.png");
const mac_cheese = require("@assets/mac_cheese.png");
const milkshake_chocolate = require("@assets/milkshake_chocolate.png");
const pancake = require("@assets/pancake.png");
const pao_de_queijo = require("@assets/pao_de_queijo.png");
const salad = require("@assets/salad.png");
const vitamina_morango = require("@assets/vitamina_morango.png");




export const RecipeList: Recipes[] = [
  {
    id: 1,
    name: "Hambúrguer 3 carnes",
    time: "1h 26min",
    portions: "8 porções",
    image: burger,
    sort: "all",
    recipe:
      "3 kg de carne moída (escolha uma carne magra e macia) 300 gramas de bacon moído 1 ovo 3 colheres (sopa) de farinha de trigo 3 colheres (sopa) de tempero caseiro: feito com alho, cebola pimenta e cheiro-verde processados no liquidificador 30ml de água gelada",
   directions: "Misture todos os ingredientes muito bem e amasse para que fique tudo muito bem misturado. Faça porções de 90 g a 100 g. Forre um plástico molhado em uma bancada e modele os hambúrgueres utilizando um aro como base. Faça um de cada vez e retire o aro logo em seguida. Forre uma assadeira Forre uma assadeira de metal com plástico, coloque os hambúrgueres e intercale camadas de carne e plástico (sem apertar). Faça no máximo 4 camadas por forma e leve para congelar. Retire do congelador, frite ou asse e está pronto.",
  

      
  },
  {
    id: 2,
    name: "Batata Rústica Assada",
    time: "1h 26min",
    portions: "8 porções",

    image: potato,
    sort: "all",
    recipe:
      "Se você sempre quis aprender fazer aquela batata rústica de lanchonete, você está no lugar certo! Vou te ensinar o passo a passo de como fazer batata rústica assada no forno que é bem simples e fica pronta em poucos minutos.",
      directions: "Misture todos os ingredientes muito bem e amasse para que fique tudo muito bem misturado. Faça porções de 90 g a 100 g. Forre um plástico molhado em uma bancada e modele os hambúrgueres utilizando um aro como base. Faça um de cada vez e retire o aro logo em seguida. Forre uma assadeira Forre uma assadeira de metal com plástico, coloque os hambúrgueres e intercale camadas de carne e plástico (sem apertar). Faça no máximo 4 camadas por forma e leve para congelar. Retire do congelador, frite ou asse e está pronto.",

  },
  {
    id: 3,

    name: "Omelete",
    time: "1h 26min",
    portions: "8 porções",

    image: omelette,
    sort: "breakfast",
    recipe:
      "Você pode rechear seu omelete com presunto e queijo, legumes e o que mais tiver na geladeira. Além do mais, servi-lo acompanhado de salada é uma excelente ideia. A versatilidade do omelete o faz ser boa companhia para um café ou refeição. Bom apetite!",
      directions: "Misture todos os ingredientes muito bem e amasse para que fique tudo muito bem misturado. Faça porções de 90 g a 100 g. Forre um plástico molhado em uma bancada e modele os hambúrgueres utilizando um aro como base. Faça um de cada vez e retire o aro logo em seguida. Forre uma assadeira Forre uma assadeira de metal com plástico, coloque os hambúrgueres e intercale camadas de carne e plástico (sem apertar). Faça no máximo 4 camadas por forma e leve para congelar. Retire do congelador, frite ou asse e está pronto.",

  },
  {
    id: 4,
    name: "Bacon e ovos",
    time: "1h 26min",
    portions: "8 porções",

    image: bacon_and_egss,
    sort: "breakfast",
    recipe:
      "Você pode rechear seu omelete com presunto e queijo, legumes e o que mais tiver na geladeira. Além do mais, servi-lo acompanhado de salada é uma excelente ideia. A versatilidade do omelete o faz ser boa companhia para um café ou refeição. Bom apetite!",
      directions: "Misture todos os ingredientes muito bem e amasse para que fique tudo muito bem misturado. Faça porções de 90 g a 100 g. Forre um plástico molhado em uma bancada e modele os hambúrgueres utilizando um aro como base. Faça um de cada vez e retire o aro logo em seguida. Forre uma assadeira Forre uma assadeira de metal com plástico, coloque os hambúrgueres e intercale camadas de carne e plástico (sem apertar). Faça no máximo 4 camadas por forma e leve para congelar. Retire do congelador, frite ou asse e está pronto.",

  },
  {
    id: 5,

    name: "Mac n Cheese",
    time: "1h 26min",
    portions: "8 porções",

    image: mac_cheese,
    sort: "cheap",
    recipe:
      "Você pode rechear seu omelete com presunto e queijo, legumes e o que mais tiver na geladeira. Além do mais, servi-lo acompanhado de salada é uma excelente ideia. A versatilidade do omelete o faz ser boa companhia para um café ou refeição. Bom apetite!",
      directions: "Misture todos os ingredientes muito bem e amasse para que fique tudo muito bem misturado. Faça porções de 90 g a 100 g. Forre um plástico molhado em uma bancada e modele os hambúrgueres utilizando um aro como base. Faça um de cada vez e retire o aro logo em seguida. Forre uma assadeira Forre uma assadeira de metal com plástico, coloque os hambúrgueres e intercale camadas de carne e plástico (sem apertar). Faça no máximo 4 camadas por forma e leve para congelar. Retire do congelador, frite ou asse e está pronto.",

  },
  {
    id: 6,

    name: "Milkshake de Chocolate",
    time: "1h 26min",
    portions: "8 porções",

    image: milkshake_chocolate,
    sort: "refresher",
    recipe:
      "Você pode rechear seu omelete com presunto e queijo, legumes e o que mais tiver na geladeira. Além do mais, servi-lo acompanhado de salada é uma excelente ideia. A versatilidade do omelete o faz ser boa companhia para um café ou refeição. Bom apetite!",
      directions: "Misture todos os ingredientes muito bem e amasse para que fique tudo muito bem misturado. Faça porções de 90 g a 100 g. Forre um plástico molhado em uma bancada e modele os hambúrgueres utilizando um aro como base. Faça um de cada vez e retire o aro logo em seguida. Forre uma assadeira Forre uma assadeira de metal com plástico, coloque os hambúrgueres e intercale camadas de carne e plástico (sem apertar). Faça no máximo 4 camadas por forma e leve para congelar. Retire do congelador, frite ou asse e está pronto.",

  },
  {
    id: 7,

    name: "Panqueca Americana",
    time: "1h 26min",
    portions: "8 porções",

    image: pancake,
    sort: "cheap",
    recipe:
      "Você pode rechear seu omelete com presunto e queijo, legumes e o que mais tiver na geladeira. Além do mais, servi-lo acompanhado de salada é uma excelente ideia. A versatilidade do omelete o faz ser boa companhia para um café ou refeição. Bom apetite!",
      directions: "Misture todos os ingredientes muito bem e amasse para que fique tudo muito bem misturado. Faça porções de 90 g a 100 g. Forre um plástico molhado em uma bancada e modele os hambúrgueres utilizando um aro como base. Faça um de cada vez e retire o aro logo em seguida. Forre uma assadeira Forre uma assadeira de metal com plástico, coloque os hambúrgueres e intercale camadas de carne e plástico (sem apertar). Faça no máximo 4 camadas por forma e leve para congelar. Retire do congelador, frite ou asse e está pronto.",

  },
  {
    id: 8,

    name: "Pão de queijo",
    time: "1h 26min",
    portions: "8 porções",

    image: pao_de_queijo,
    sort: "breakfast",
    recipe:
      "Você pode rechear seu omelete com presunto e queijo, legumes e o que mais tiver na geladeira. Além do mais, servi-lo acompanhado de salada é uma excelente ideia. A versatilidade do omelete o faz ser boa companhia para um café ou refeição. Bom apetite!",
      directions: "Misture todos os ingredientes muito bem e amasse para que fique tudo muito bem misturado. Faça porções de 90 g a 100 g. Forre um plástico molhado em uma bancada e modele os hambúrgueres utilizando um aro como base. Faça um de cada vez e retire o aro logo em seguida. Forre uma assadeira Forre uma assadeira de metal com plástico, coloque os hambúrgueres e intercale camadas de carne e plástico (sem apertar). Faça no máximo 4 camadas por forma e leve para congelar. Retire do congelador, frite ou asse e está pronto.",

  },
  {
    id: 9,

    name: "Salada",
    time: "1h 26min",
    portions: "8 porções",

    image: salad,
    sort: "cheap",
    recipe:
      "Você pode rechear seu omelete com presunto e queijo, legumes e o que mais tiver na geladeira. Além do mais, servi-lo acompanhado de salada é uma excelente ideia. A versatilidade do omelete o faz ser boa companhia para um café ou refeição. Bom apetite!",
      directions: "Misture todos os ingredientes muito bem e amasse para que fique tudo muito bem misturado. Faça porções de 90 g a 100 g. Forre um plástico molhado em uma bancada e modele os hambúrgueres utilizando um aro como base. Faça um de cada vez e retire o aro logo em seguida. Forre uma assadeira Forre uma assadeira de metal com plástico, coloque os hambúrgueres e intercale camadas de carne e plástico (sem apertar). Faça no máximo 4 camadas por forma e leve para congelar. Retire do congelador, frite ou asse e está pronto.",

  },
  {
    id: 10,
    name: "Vitamina de morango",
    time: "1h 26min",
    portions: "8 porções",

    image: vitamina_morango,
    sort: "refresher",
    recipe:
      "Você pode rechear seu omelete com presunto e queijo, legumes e o que mais tiver na geladeira. Além do mais, servi-lo acompanhado de salada é uma excelente ideia. A versatilidade do omelete o faz ser boa companhia para um café ou refeição. Bom apetite!",
      directions: "Misture todos os ingredientes muito bem e amasse para que fique tudo muito bem misturado. Faça porções de 90 g a 100 g. Forre um plástico molhado em uma bancada e modele os hambúrgueres utilizando um aro como base. Faça um de cada vez e retire o aro logo em seguida. Forre uma assadeira Forre uma assadeira de metal com plástico, coloque os hambúrgueres e intercale camadas de carne e plástico (sem apertar). Faça no máximo 4 camadas por forma e leve para congelar. Retire do congelador, frite ou asse e está pronto.",

  },

];

export const FilterBreakfast = RecipeList.filter((recipe => {
  return recipe.sort === "breakfast";
}))

export const FilterRefresher = RecipeList.filter((recipe => {
  return recipe.sort === "refresher";
}))

export const FilterCheap = RecipeList.filter((recipe => {
  return recipe.sort === "cheap";
}))