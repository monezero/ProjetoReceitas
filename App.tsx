import { AppState, StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import theme from "@theme/index";
import { Loading } from "@components/Loading";
import { AuthRoutes } from "@routes/auth.routes";
import React from "react";
import { RootStack } from "@routes/app.routes";
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <RootStack /> : <Loading />}
      </ThemeProvider>
    </NavigationContainer>
  );
}
