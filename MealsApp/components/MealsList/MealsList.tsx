import React, { FC } from "react";
import { ListRenderItemInfo, View, FlatList, StyleSheet } from "react-native";
import Meal from "../../data/models/meal";
import { MealItem } from "./MealItem";

interface MealsListProps {
  items: Meal[];
}

export const MealsList: FC<MealsListProps> = ({ items }) => {
  const renderedMeals = (dataItem: ListRenderItemInfo<Meal>) => (
    <MealItem data={dataItem.item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
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
