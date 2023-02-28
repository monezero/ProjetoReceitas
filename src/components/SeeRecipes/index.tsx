import { FilterBreakfast, RecipeList, Recipes } from "@data/recipes";
import React, { useState } from "react";
import {
  ContainerIcons,
  ContainerMore,
  ContainerText,
  ContentMore,
  IconBack,
  IconHeartMore,
  IconShare,
  ImageMore,
  Materials,
  MaterialsTitle,
  MiniText,
  RecipeContainer,
  TitleContainerMore,
  TitleMore,
  TitleStart,
} from "./styles";
import { Entypo } from "@expo/vector-icons";
import { FlatList, ScrollView } from "react-native";
import { RecipesProps, RecipeVisual } from "@components/Flatlist";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRouteProps } from "@routes/auth.routes";

export function SeeRecipes({
  id,
  name,
  image,
  recipe,
  directions,
  sort,
}: Recipes) {
  const receitaSelecionada = ({ route }) => {
    console.log(route.params.recipeList);
  };
  const data = RecipeList.find((data) => data.id === data.id);
  const [heart, setHeart] = useState(false);
  const [back, setBack] = useState(false);
  const navigation = useNavigation<AuthNavigatorRouteProps>();
  function leaveRecipes() {
    navigation.goBack();
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <ContainerMore>
        <ImageMore source={data?.image} />
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
              onPress={() => navigation.navigate("Root")}
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
            <TitleMore>{data?.name}</TitleMore>
            <TitleContainerMore
              colors={["transparent", "#2dc268"]}
              start={{ x: 1, y: 3 }}
              end={{ x: -0.5, y: -1 }}
            ></TitleContainerMore>
          </TitleStart>

          <RecipeContainer>
            <ScrollView></ScrollView>
            <MaterialsTitle>Receita</MaterialsTitle>
            <Materials>{data?.recipe}</Materials>
            <MaterialsTitle>Preparo</MaterialsTitle>
            <Materials>{data?.directions}</Materials>
          </RecipeContainer>
        </ContentMore>
      </ContainerMore>
      <ContainerIcons>
        <Feather name="clock" size={30} color="#2dc268" />

        <MaterialCommunityIcons name="food-outline" size={30} color="#2dc268" />
      </ContainerIcons>
      <ContainerText>
        <MiniText>{data?.time}</MiniText>
        <MiniText>{data?.portions}</MiniText>
      </ContainerText>
    </SafeAreaView>
  );
}
