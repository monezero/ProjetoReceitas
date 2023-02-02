import { Button } from "@components/Button";
import {} from "@components/Flatlist";
import { Loading } from "@components/Loading";
import { SearchBar } from "@components/SearchBar";
import {
  FilterBreakfast,
  FilterCheap,
  FilterRefresher,
  RecipeList,
} from "@data/recipes";
import { useState } from "react";
import { View, Text } from "react-native";
import { Row } from "./styles";
import { FlatListRecipes } from "@components/Flatlist";
export function Recipes() {
  const [sort, setSort] = useState("all");
  const data = RecipeList;
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <SearchBar
        placeholder="Procurar receitas"
        autoCorrect={false}
        autoCapitalize={"sentences"}
      ></SearchBar>
      <FlatListRecipes data={data.filter((Recipes) => Recipes.sort === sort)} />
      <Row>
        <Button
          title={"Café da manhã"}
          onPress={() =>
            setSort((prevState) =>
              prevState === "breakfast" ? "all" : "breakfast"
            )
          }
        />
        <Button
          title={"Refrescos"}
          onPress={() =>
            setSort((prevState) =>
              prevState === "refresher" ? "all" : "refresher"
            )
          }
        />
        <Button
          title={"Barato"}
          onPress={() =>
            setSort((prevState) => (prevState === "cheap" ? "all" : "cheap"))
          }
        />
      </Row>
    </View>
  );
}
