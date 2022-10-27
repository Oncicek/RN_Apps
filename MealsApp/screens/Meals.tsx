import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { MealItem } from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import Meal from "../data/models/meal";
import { RootStackParamsList } from "../types";

interface MealsProps {
  navigation: NativeStackNavigationProp<RootStackParamsList, "Meals">;
  route: RouteProp<RootStackParamsList, "Meals">;
}

export const Meals: FC<MealsProps> = ({ navigation, route }) => {
  const id = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(id) > -1
  );

  const renderedMeals = (dataItem: ListRenderItemInfo<Meal>) => (
    <MealItem data={dataItem.item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderedMeals}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
