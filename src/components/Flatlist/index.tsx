import { RecipeList, Recipes } from "@data/recipes";
import {
  Container,
  Title,
  Image,
  Content,
  TitleContainer,
  IconHeart,
  IconMore,
} from "./styles";
import { useState } from "react";
import {
  ImageSourcePropType,
  ListRenderItem,
  FlatList,
  View,
  Modal,
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
  const [heart, setHeart] = useState(false);
  const [more, setMore] = useState(false);
  return (
    <Container>
      <Image source={image} />

      <Content>
        <IconHeart>
          <Entypo
            name="heart-outlined"
            size={30}
            color="white"
            onPress={() => {
              setHeart(true);
            }}
          />
        </IconHeart>
        <IconMore>
          <Entypo name="chevron-thin-down" size={30} color="white" />
        </IconMore>
        {heart && (
          <IconHeart>
            <Entypo
              name="heart"
              size={30}
              color="#2dc268"
              onPress={() => setHeart(false)}
            />
          </IconHeart>
        )}
        {more && <IconMore></IconMore>}

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
