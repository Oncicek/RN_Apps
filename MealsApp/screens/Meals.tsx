import React, { FC, useEffect, useLayoutEffect } from "react";
import { MealsList } from "../components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { RootStackScreenProps } from "../types";

export const Meals: FC<RootStackScreenProps<"Meals">> = ({
  navigation,
  route,
}) => {
  const id = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(id) > -1
  );

  useLayoutEffect(() => {
    const title = CATEGORIES.find((category) => category.id === id)?.title;
    navigation.setOptions({ title });
  }, [navigation, id]);

  return <MealsList items={displayedMeals} />;
};
