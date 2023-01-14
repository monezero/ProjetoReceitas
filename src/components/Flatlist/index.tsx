import { RecipeList, Recipes } from "@data/recipes";
import {
  Container,
  Title,
  Image,
  Content,
  TitleContainer,
  Icon,
} from "./styles";
import { useState } from "react";
import {
  ImageSourcePropType,
  ListRenderItem,
  FlatList,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export function FlatlistRecipes() {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.name}
      data={RecipeList}
      renderItem={({ item }) => <RecipeVisual {...item} />}
    />
  );
}

export function RecipeVisual({ name, image, description }: Recipes) {
  return (
    <Container>
      <Image source={image} />

      <Content>
        <Icon>
          <Entypo name="heart-outlined" size={30} color="white" />
        </Icon>
        <Title>{name}</Title>
        <TitleContainer
          colors={["transparent", "#2dc268"]}
          start={{ x: 1, y: 3 }}
          end={{ x: -0.5, y: -1 }}
        ></TitleContainer>
      </Content>
    </Container>
  );
}
