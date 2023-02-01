import { ImageProps } from "react-native";


export interface Recipes {
  name: string;
  image: any;
  description: string;
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
    name: "Hambúrguer 3 carnes",
    image: burger,
    sort: "all",
    description:
      "O hambúrguer caseiro deve ser preparado com uma mistura de carnes. Nesta receita, são usados três cortes de carne: a picanha (mais magra), a fraldinha (mais gordurosa) e a linguiça cababresa fresca. O cominho, o coentro, o sal grosso e a pimenta preta tão um toque ainda mais especial a esse hambúrguer caseiro. Confira!",
  },
  {
    name: "Batata Rústica Assada",
    image: potato,
    sort: "all",
    description:
      "Se você sempre quis aprender fazer aquela batata rústica de lanchonete, você está no lugar certo! Vou te ensinar o passo a passo de como fazer batata rústica assada no forno que é bem simples e fica pronta em poucos minutos.",
  },
  {
    name: "Omelete",
    image: omelette,
    sort: "breakfast",
    description:
      "Você pode rechear seu omelete com presunto e queijo, legumes e o que mais tiver na geladeira. Além do mais, servi-lo acompanhado de salada é uma excelente ideia. A versatilidade do omelete o faz ser boa companhia para um café ou refeição. Bom apetite!",
  },
  {
    name: "Bacon e ovos",
    image: bacon_and_egss,
    sort: "breakfast",
    description:
      "Você pode rechear seu omelete com presunto e queijo, legumes e o que mais tiver na geladeira. Além do mais, servi-lo acompanhado de salada é uma excelente ideia. A versatilidade do omelete o faz ser boa companhia para um café ou refeição. Bom apetite!",
  },
  {
    name: "Mac n Cheese",
    image: mac_cheese,
    sort: "cheap",
    description:
      "Você pode rechear seu omelete com presunto e queijo, legumes e o que mais tiver na geladeira. Além do mais, servi-lo acompanhado de salada é uma excelente ideia. A versatilidade do omelete o faz ser boa companhia para um café ou refeição. Bom apetite!",
  },
  {
    name: "Milkshake de Chocolate",
    image: milkshake_chocolate,
    sort: "refresher",
    description:
      "Você pode rechear seu omelete com presunto e queijo, legumes e o que mais tiver na geladeira. Além do mais, servi-lo acompanhado de salada é uma excelente ideia. A versatilidade do omelete o faz ser boa companhia para um café ou refeição. Bom apetite!",
  },
  {
    name: "Panqueca Americana",
    image: pancake,
    sort: "cheap",
    description:
      "Você pode rechear seu omelete com presunto e queijo, legumes e o que mais tiver na geladeira. Além do mais, servi-lo acompanhado de salada é uma excelente ideia. A versatilidade do omelete o faz ser boa companhia para um café ou refeição. Bom apetite!",
  },
  {
    name: "Pão de queijo",
    image: pao_de_queijo,
    sort: "breakfast",
    description:
      "Você pode rechear seu omelete com presunto e queijo, legumes e o que mais tiver na geladeira. Além do mais, servi-lo acompanhado de salada é uma excelente ideia. A versatilidade do omelete o faz ser boa companhia para um café ou refeição. Bom apetite!",
  },
  {
    name: "Salada",
    image: salad,
    sort: "cheap",
    description:
      "Você pode rechear seu omelete com presunto e queijo, legumes e o que mais tiver na geladeira. Além do mais, servi-lo acompanhado de salada é uma excelente ideia. A versatilidade do omelete o faz ser boa companhia para um café ou refeição. Bom apetite!",
  },
  {
    name: "Vitamina de morango",
    image: vitamina_morango,
    sort: "refresher",
    description:
      "Você pode rechear seu omelete com presunto e queijo, legumes e o que mais tiver na geladeira. Além do mais, servi-lo acompanhado de salada é uma excelente ideia. A versatilidade do omelete o faz ser boa companhia para um café ou refeição. Bom apetite!",
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