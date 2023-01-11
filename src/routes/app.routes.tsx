import React from "react";
import { NavigationContainer } from "react-navigation";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useTheme } from "styled-components";
import { Platform } from "react-native";
import { Recipes } from "@screens/Recipes";
import { Entypo } from "@expo/vector-icons";

type AppRoutes = {
  recipes: undefined;
  favorite: undefined;
  shoplist: undefined;
  pantry: undefined;
  profile: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { COLORS, FONT_FAMILY } = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.GREEN,
        tabBarInactiveTintColor: COLORS.GRAY,

        tabBarStyle: {
          backgroundColor: COLORS.WHITE,
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: 10,
          paddingTop: 8,
        },
      }}
    >
      <Screen
        name="recipes"
        component={Recipes}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Entypo name="text-document" size={24} color="black" />
          ),
        }}
      />
    </Navigator>
  );
}
