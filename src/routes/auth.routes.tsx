import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { RecipeDetails } from "@screens/RecipeDetails";
import { Recipes } from "@screens/Recipes";

type AuthRoutes = {
  recipedetails: undefined;
  Receitas: undefined;
  Favoritos: undefined;
  Lista: undefined;
  Deposito: undefined;
  Perfil: undefined;
};

export type AuthNavigatorRouteProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="recipedetails" component={RecipeDetails} />
      <Screen name="Receitas" component={Recipes} />
      <Screen name="Favoritos" component={Recipes} />
      <Screen name="Lista" component={Recipes} />
      <Screen name="Deposito" component={Recipes} />
      <Screen name="Perfil" component={Recipes} />
    </Navigator>
  );
}
