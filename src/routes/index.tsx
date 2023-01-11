import { NavigationContainer } from "@react-navigation/native";
import theme from "@theme/index";
import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
