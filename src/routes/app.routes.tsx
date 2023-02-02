import React from "react";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useTheme } from "styled-components";
import { Platform, View } from "react-native";
import { Recipes } from "@screens/Recipes";
import { RecipeDetails } from "@screens/RecipeDetails";

import { Entypo } from "@expo/vector-icons";
import { Favorites } from "@screens/Favorites";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type AppRoutes = {
  Receitas: undefined;
  Favoritos: undefined;
  Lista: undefined;
  Deposito: undefined;
  Perfil: undefined;
  DetalhesReceita: undefined;
  Root: undefined;
  NestedDetalhesReceita: undefined;
  Stack: undefined;
  BottomTab: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const Bottom = createBottomTabNavigator<AppRoutes>();
const Root = createNativeStackNavigator<AppRoutes>();
const Nested = createNativeStackNavigator<AppRoutes>();

export function RootStack() {
  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Screen name="Root" component={BottomNav} />
      <Root.Screen name="Stack" component={NestedStack} />
    </Root.Navigator>
  );
}

export function BottomNav() {
  const { COLORS, FONT_FAMILY } = useTheme();
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: {
          fontFamily: "Roboto_700Bold",
          color: "#2dc268",
          marginBottom: 22,
          letterSpacing: 0.5,
        },
        tabBarStyle: {
          position: "absolute",
          backgroundColor: COLORS.WHITE,
          borderTopWidth: 0,
          bottom: 18,
          borderRadius: 20,
          height: 80,
          right: 14,
          left: 14,
        },
      }}
    >
      <Bottom.Screen
        name="Receitas"
        component={Recipes}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Entypo name="text-document" size={24} color="#2dc268" />;
            }

            return <Entypo name="text-document" size={24} color="#afb0b2" />;
          },
        }}
      />
      <Bottom.Screen
        name="Favoritos"
        component={Recipes}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Entypo name="heart" size={24} color="#2dc268" />;
            }

            return <Entypo name="heart" size={24} color="#afb0b2" />;
          },
        }}
      />
      <Bottom.Screen
        name="Lista"
        component={Recipes}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Entypo name="shopping-cart" size={24} color="#2dc268" />;
            }

            return <Entypo name="shopping-cart" size={24} color="#afb0b2" />;
          },
        }}
      />
      <Bottom.Screen
        name="Deposito"
        component={Recipes}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Entypo name="drink" size={24} color="#2dc268" />;
            }

            return <Entypo name="drink" size={24} color="#afb0b2" />;
          },
        }}
      />
      <Bottom.Screen
        name="Perfil"
        component={Recipes}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Entypo name="user" size={24} color="#2dc268" />;
            }

            return <Entypo name="user" size={24} color="#afb0b2" />;
          },
        }}
      />
    </Bottom.Navigator>
  );
}

export function NestedStack() {
  return (
    <Nested.Navigator screenOptions={{ headerShown: false }}>
      <Nested.Screen
        name="NestedDetalhesReceita"
        component={RecipeDetails}
        options={{
          headerShown: false,
        }}
      />
      <Nested.Screen name="Receitas" component={Recipes} />
      <Nested.Screen name="DetalhesReceita" component={RecipeDetails} />
      <Nested.Screen name="Deposito" component={Recipes} />
      <Nested.Screen name="Favoritos" component={Recipes} />
      <Nested.Screen name="Lista" component={Recipes} />
      <Nested.Screen name="Perfil" component={Recipes} />
    </Nested.Navigator>
  );
}

{
  /* <Screen
        name="DetalhesReceita"
        component={RecipeDetails}
        options={{ tabBarStyle: { display: "none" }, tabBarShowLabel: false }}
      /> */
}
