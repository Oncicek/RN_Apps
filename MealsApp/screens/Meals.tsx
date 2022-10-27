import React, { FC, useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { MealItem } from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../data/models/meal";
import { RootStackScreenProps } from "../types";

export const Meals: FC<RootStackScreenProps<"Meals">> = ({
  navigation,
  route,
}) => {
  const id = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(id) > -1
  );

  const renderedMeals = (dataItem: ListRenderItemInfo<Meal>) => (
    <MealItem data={dataItem.item} />
  );

  useLayoutEffect(() => {
    const title = CATEGORIES.find((category) => category.id === id)?.title;
    navigation.setOptions({ title });
  }, [navigation, id]);

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
