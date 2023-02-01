import { NavigationContainer } from "@react-navigation/native";
import theme from "@theme/index";
import { AppBottomTab } from "./app.routes";

export function _Routes() {
  return (
    <NavigationContainer>
      <AppBottomTab />
    </NavigationContainer>
  );
}
