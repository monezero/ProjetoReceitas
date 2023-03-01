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
    time: "1h",
    portions: "4 porções",

    image: potato,
    sort: "all",
    recipe:
      "3 unidades de batata (cruas e com casca) 1 colher (sopa) de azeite de oliva 1/2 colher (sopa) de sal 1/2 colher (sopa) páprica defumada 1 colher (sopa) de alecrim 6 dentes de alho (descascados)",
      directions: "Passo 1 Antes de começar, lave bem as batatas; Passo 2 DICA: não precisa descascar. Passo 3 Corte as batatas no tamanho e formato que desejar; Passo 4 DICA: eu gosto de cortar em formato de canoa. O importante é que fiquem na mesma espessura para que umas não fiquem mais assadas que as outras. Passo 5 Transfira as batatas para uma assadeira e espalhe elas; Passo 6 Regue o azeite por cima das batatas; Passo 7 DICA: não coloque azeite em excesso, para que não fiquem encharcadas. Passo 8 Salpique o sal por cima, a páprica defumada e o alecrim; Passo 9 Misture tudo muito bem; Passo 10 Em seguida espalhe as batatas por toda a assadeira; Passo 11 DICA: não deixe que fique uma por cima da outra. Passo 12 Espalhe os dentes de alho por cima das batatas; Passo 13 DICA: o dente de alho vai ajudar a dar mais aroma e sabor nas suas batatas. Passo 14 Depois leve para assar em forno pré aquecido, 180ºC, por cerca de 30 minutos ou até dourar; Passo 15 A cada 10 minutos, abra o forno e mexa um pouco a assadeira para que as batatas mudem de lugar e assem por igual;",

  },
  {
    id: 3,

    name: "Omelete",
    time: "4min",
    portions: "1 porção",

    image: omelette,
    sort: "breakfast",
    recipe:
      "2 ovos, 1 pitada de sal, 1 fatia de presunto, 2 fatias de queijo tempero verde a gosto, caldo de galinha a gosto",
      directions: " Bata os 2 ovos, pode ser na batedeira ou não. Após ter batido bem, coloque-o na frigideira já untada com óleo, acrescente o sal, o presunto picado em quadradinhos e as duas fatias de queijo (não precisa picar o queijo). Coloque os temperos a gosto, espere ficar firme, e vire o omelete. Está pronto um omelete delicioso, bom apetite!",

  },
  {
    id: 4,
    name: "Bacon e ovos",
    time: "10min",
    portions: "2 porções",

    image: bacon_and_egss,
    sort: "breakfast",
    recipe:
      "1 colher (sopa) de cebola picada 50g de bacon fatiado e picado 4 ovos 2 colheres (sopa) de leite Sal a gosto Pimenta-do-reino a gosto",
      directions: "Em uma frigideira frite a cebola e o bacon. Em uma tigela, misture os ovos e o leite. Derrame os ovos na frigideira com o bacon. Salpique os ovos com sal e pimenta. Deixe cozinhar em fogo baixo, mexendo sempre, até o ovo ficar firme. Transfira para um prato. Sirva quente.",

  },
  {
    id: 5,

    name: "Mac n Cheese",
    time: "25min",
    portions: "4 porções",

    image: mac_cheese,
    sort: "cheap",
    recipe:
      "300 gramas de macarrão “joelho” 2 xícaras (chá) de leite 2 colheres (sopa) de farinha de trigo 1 colher (sopa) de margarina 1 unidade de alho picadinho 1 xícara (chá) de queijo ralado ou picado pode misturar diferentes tipos como gorgonzola, cheddar, parmesão. noz-moscada a gosto 1 xícara de creme de ricota (opcional) pimenta-do-reino branca e sal à gosto parmesão para gratinar à gosto ",
      directions: "Comece pré-aquecendo o forno com temperatura média enquanto você faz o macarrão. Em uma panela coloque margarina e o alho. Vá mexendo até que comece a dourar. Adicione aos poucos a farinha de trigo, mexa para se tornar uma pasta e depois vá pingando o leite até que colocar ele todo. Continue sem parar de mexer para que não grude. Leve o macarrão para cozinhar e retire quando tiver al dente Abaixe o fogo do creme, mas continue mexendo até que comece a borbulhar. Junte o queijo ralado, o creme de ricota e continue mexendo por mais 5 minutos Se o creme estiver muito grosso, coloque mais leite, mas vá acrescentando aos poucos para não ficar líquido demais. Tempere o molho com noz, pimenta e sal Coloque o molho em cima do macarrão escorrido e misture bem. Cumpra a massa com queijo parmesão ralado e leve ao forno para gratinar. Retire e sirva ainda quente",

  },
  {
    id: 6,

    name: "Milkshake de Chocolate",
    time: "5min",
    portions: "1 porção",

    image: milkshake_chocolate,
    sort: "refresher",
    recipe:
      " 3 bolas de sorvete de chocolate 2 e 1/2 xícaras de leite gelado 1 colher (chá) de essência de baunilha cobertura de chocolate ou outro sabor",
      directions: " Bata todos os ingredientes, menos a cobertura, no liquidificador. Espalhe um pouco de cobertura em uma taça própria para milk shake. Coloque o milk shake na taça e sirva-se.",

  },
  {
    id: 7,

    name: "Panqueca Americana",
    time: "40min",
    portions: "8 porções",

    image: pancake,
    sort: "cheap",
    recipe:
      " 1 e 1/4 xícara (chá) de farinha de trigo 1 colher (sopa) de açúcar 3 colheres (chá) de fermento em pó 2 ovos levemente batidos 1 xícara (chá) de leite 2 colheres (sopa) de manteiga derretida pitada de sal óleo",
      directions: " Misture em um recipiente: a farinha, o açúcar, o fermento e o sal. Em outro recipiente, misture os ovos, o leite e a manteiga. Acrescente os líquidos aos secos, sem misturar em excesso. O ponto da massa não deve ser muito líquido, deve escorrer lentamente. Aqueça e unte a frigideira com óleo, coloque a massa no centro, cerca de 1/4 xícara por panqueca. Vire a massa para assar do outro lado e está pronto!",

  },
  {
    id: 8,

    name: "Pão de queijo",
    time: "40min",
    portions: "30 porções",

    image: pao_de_queijo,
    sort: "breakfast",
    recipe:
      " 800 g de polvilho azedo 1 xícara de água 1 xícara de leite 1/2 xícara de óleo 2 ovos 100 g de queijo parmesão ralado sal a gosto!",
      directions: " Em uma panela, ferva a água e acrescente o leite, o óleo e o sal. Adicione o polvilho aos poucos até dar liga. Pode ser que você não precise usar os 800g, então coloque devagar e sove a massa até soltar da mão: esse é o ponto. Quando a massa estiver morna, acrescente o queijo parmesão, os ovos e misture bem. Unte as mãos e enrole bolinhas de 2 cm de diâmetro. Disponha as bolinhas em uma assadeira untada com óleo, deixando um espaço entre elas. Asse em forno médio (180º C), preaquecido, por cerca de 40 minutos.",

  },
  {
    id: 9,

    name: "Salada",
    time: "30min",
    portions: "6 porções",

    image: salad,
    sort: "cheap",
    recipe:
      " 1 alface americana 2 cenouras raladas 1 beterraba ralada 1 tomate sem pele e sem semente 1 cebola cortada em rodelas ou picada 1 colher (chá) de sal 1 pitada de açúcar 1 colher (sopa) de azeite extra virgem de oliva 2 a 3 colheres de vinagre",
      directions: " Lave bem todos os ingredientes. Rasgue as folhas do alface para que fiquem menores. Rale as cenouras e a beterraba. O tomate, após estar sem pele e semente, deve ser picado. A cebola pode ser cortada em pedacinhos ou em rodelas, como preferir. Junte tudo. Molho: Junte o açúcar, sal, azeite e vinagre em uma xícara. Misture bem com uma colher e despeje sobre a salada. Pronto!",

  },
  {
    id: 10,
    name: "Vitamina de morango",
    time: "5min",
    portions: "6 porções",

    image: vitamina_morango,
    sort: "refresher",
    recipe:
      " 700 ml de leite bem gelado 1 caixinha de morango 1/2 maçã média sem casca 1/2 lata de leite condensado",
      directions: "Bater os ingredientes no liquidificador e servir decorado com um morango.",

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