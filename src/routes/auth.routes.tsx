import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { RecipeDetails } from "@screens/RecipeDetails";
import { Recipes } from "@screens/Recipes";

type AuthRoutes = {
  DetalhesReceita: undefined;
  Receitas: undefined;
};

export type AuthNavigatorRouteProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Receitas" component={Recipes} />
    </Navigator>
  );
}
