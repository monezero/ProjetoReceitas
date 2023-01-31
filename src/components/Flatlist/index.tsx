import {
  FilterBreakfast,
  FilterCheap,
  FilterRefresher,
  RecipeList,
  Recipes,
} from "@data/recipes";
import {
  Container,
  Title,
  Image,
  Content,
  TitleContainer,
  IconHeart,
  IconMore,
  ContainerMore,
  ImageMore,
  ContentMore,
  IconHeartMore,
  IconBack,
  TitleContainerMore,
  TitleMore,
  Recipe,
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
import {
  createNavigationContainerRef,
  useNavigation,
} from "@react-navigation/native";
import { AuthNavigatorRouteProps, AuthRoutes } from "@routes/auth.routes";

export interface RecipesProps {
  data: Recipes[];
}

export const FlatListRecipes = (props: RecipesProps) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.name}
      data={props.data}
      renderItem={({ item }) => <RecipeVisual {...item} />}
    />
  );
};

export function RecipeVisual({ name, image, description, sort }: Recipes) {
  const [heart, setHeart] = useState(false);
  const [more, setMore] = useState(false);
  const navigation = useNavigation<AuthNavigatorRouteProps>();
  function handleRecipes() {
    navigation.navigate("DetalhesReceita");
  }

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
          <Entypo
            name="chevron-thin-down"
            size={30}
            color="white"
            onPress={handleRecipes}
          />
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
