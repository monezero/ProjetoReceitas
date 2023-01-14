import { ImageProps } from "react-native";

export interface Recipes {
  name: string;
  image: ImageProps["source"];
  description: string;
}

const burger = require("@assets/burger.png");
const potato = require("@assets/potato.png");
const omelette = require("@assets/omelette.png");


export const RecipeList: Recipes[] = [
  {
    name: "Hambúrguer  3 carnes",
    image: burger,
    description:
      "O hambúrguer caseiro deve ser preparado com uma mistura de carnes. Nesta receita, são usados três cortes de carne: a picanha (mais magra), a fraldinha (mais gordurosa) e a linguiça cababresa fresca. O cominho, o coentro, o sal grosso e a pimenta preta tão um toque ainda mais especial a esse hambúrguer caseiro. Confira!",
  },
  {
    name: "Batata Rústica Assada",
    image: potato,
    description:
      "Se você sempre quis aprender fazer aquela batata rústica de lanchonete, você está no lugar certo! Vou te ensinar o passo a passo de como fazer batata rústica assada no forno que é bem simples e fica pronta em poucos minutos.",
  },
  {
    name: "Omelete",
    image: omelette,
    description:
      "Você pode rechear seu omelete com presunto e queijo, legumes e o que mais tiver na geladeira. Além do mais, servi-lo acompanhado de salada é uma excelente ideia. A versatilidade do omelete o faz ser boa companhia para um café ou refeição. Bom apetite!",
  },

];