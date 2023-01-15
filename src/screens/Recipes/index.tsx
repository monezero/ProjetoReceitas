import { Button } from "@components/Button";
import { FlatlistRecipes } from "@components/Flatlist";
import { Loading } from "@components/Loading";
import { SearchBar } from "@components/SearchBar";
import { View, Text } from "react-native";
import { Row } from "./styles";

export function Recipes() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <SearchBar
        placeholder="Search recipes..."
        autoCorrect={false}
        autoCapitalize={"sentences"}
      ></SearchBar>
      <FlatlistRecipes />
      <Row>
        <Button title={"Café da manhã"} />
        <Button title={"Refrescos"} />
        <Button title={"Barato"} />
      </Row>
    </View>
  );
}
