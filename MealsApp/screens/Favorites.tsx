import React, { FC, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MealsList } from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

export const Favorites: FC = () => {
  const meals = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) => meals?.ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>You got no favorite meals.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
