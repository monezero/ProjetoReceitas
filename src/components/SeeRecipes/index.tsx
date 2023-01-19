import { FilterBreakfast, RecipeList, Recipes } from "@data/recipes";
import React, { useState } from "react";
import {
  ContainerIcons,
  ContainerMore,
  ContentMore,
  IconBack,
  IconHeartMore,
  IconShare,
  ImageMore,
  Materials,
  MaterialsTitle,
  RecipeContainer,
  TitleContainerMore,
  TitleMore,
  TitleStart,
} from "./styles";
import { Entypo } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { RecipeVisual } from "@components/Flatlist";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function FlatlistRecipesMore() {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.name}
      data={RecipeList}
      renderItem={({ item }) => <SeeRecipes {...item} />}
    />
  );
}

export function SeeRecipes({ name, image, description, sort }: Recipes) {
  const [heart, setHeart] = useState(false);
  const [back, setBack] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <ContainerMore>
        <ImageMore source={require("@assets/burger.png")} />
        <ContentMore>
          <IconHeartMore>
            <Entypo
              name="heart-outlined"
              size={30}
              color="white"
              onPress={() => {
                setHeart(true);
              }}
            />
          </IconHeartMore>
          <IconBack>
            <Entypo
              name="chevron-thin-left"
              size={30}
              color="white"
              onPress={() => setBack(true)}
            />
          </IconBack>
          <IconShare>
            <Entypo name="share" size={30} color="white" />
          </IconShare>
          {heart && (
            <IconHeartMore>
              <Entypo
                name="heart-outlined"
                size={30}
                color="white"
                onPress={() => {
                  setHeart(true);
                }}
              />
            </IconHeartMore>
          )}
          {back && <IconHeartMore></IconHeartMore>}
          <TitleStart>
            <TitleMore>Hambúrguer 3 carnes</TitleMore>
            <TitleContainerMore
              colors={["transparent", "#2dc268"]}
              start={{ x: 1, y: 3 }}
              end={{ x: -0.5, y: -1 }}
            ></TitleContainerMore>
          </TitleStart>

          <RecipeContainer>
            <MaterialsTitle>Receita</MaterialsTitle>
            <Materials>
              3 kg de carne moída (escolha uma carne magra e macia) {"\n"} 300 g
              de bacon moído {"\n"} 1 ovo {"\n"} 3 colheres (sopa) de farinha de
              trigo {"\n"} 3 colheres (sopa) de tempero caseiro: feito com alho,
              sal, cebola, pimenta e cheiro-verde processados no liquidificador{" "}
              {"\n"} 30 ml de água gelada
            </Materials>
            <MaterialsTitle>Preparo</MaterialsTitle>
            <Materials>
              Misture todos os ingredientes muito bem e amasse para que fique
              tudo muito bem misturado {"\n"} Faça porções de 90 g a 100 g{" "}
              {"\n"} Forre um plástico molhado em uma bancada e modele os
              hambúrgueres utilizando um aro como base {"\n"} Faça um de cada
              vez e retire o aro logo em seguida {"\n"} Forre uma assadeira de
              metal com plástico, coloque os hambúrgueres e intercale camadas de
              carne e plásticos (sem apertar) {"\n"} Faça no máximo 4 camadas
              por forma e leve para congelar {"\n"} Retire do congelador, frite
              ou asse e está pronto.
            </Materials>
          </RecipeContainer>
        </ContentMore>
      </ContainerMore>
      <ContainerIcons>
        <Feather name="clock" size={30} color="#2dc268" />
        <MaterialCommunityIcons name="food-outline" size={30} color="#2dc268" />
      </ContainerIcons>
    </SafeAreaView>
  );
}

export function FlatlistRecipesBreakfast() {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.name}
      data={FilterBreakfast}
      renderItem={({ item }) => <SeeRecipes {...item} />}
    />
  );
}
