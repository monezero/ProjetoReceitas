import React from "react";
import { NavigationContainer } from "react-navigation";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useTheme } from "styled-components";
import { Platform, View } from "react-native";
import { Recipes } from "@screens/Recipes";
import { Entypo } from "@expo/vector-icons";
import { Favorites } from "@screens/Favorites";

type AppRoutes = {
  Recipes: undefined;
  Favorites: undefined;
  Shoplist: undefined;
  Pantry: undefined;
  Profile: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { COLORS, FONT_FAMILY } = useTheme();
  return (
    <Navigator
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
      <Screen
        name="Recipes"
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
      <Screen
        name="Favorites"
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
      <Screen
        name="Shoplist"
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
      <Screen
        name="Pantry"
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
      <Screen
        name="Profile"
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
    </Navigator>
  );
}
