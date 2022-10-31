import React, { FC, useContext, useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { IconButton } from "../components/IconButton";
import { List } from "../components/MealDetail/List";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { MealDetails } from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { RootStackScreenProps } from "../types";
import { FavoritesContext } from "../store/context/favorites-context";

export const MealDetailScreen: FC<RootStackScreenProps<"MealDetail">> = ({
  route,
  navigation,
}) => {
  const mealId = route.params.mealId;

  const {
    imageUrl,
    affordability,
    title,
    duration,
    complexity,
    ingredients,
    steps,
  } = MEALS.find((meal) => meal.id === mealId) || {};

  const context = useContext(FavoritesContext);

  const isMealFavorite = context?.ids.includes(mealId);

  const headerButtonPressHandler = () => {
    if (isMealFavorite) {
      context?.removeFavorite(mealId);
    } else {
      context?.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={headerButtonPressHandler}
          color="white"
          icon={isMealFavorite ? "star" : "star-outline"}
        />
      ),
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        affordability={affordability}
        complexity={complexity}
        duration={duration}
        textStyle={styles.detialText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle text="Ingredients" />
          <List data={ingredients} />
          <Subtitle text="Steps" />
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  detialText: {
    color: "white",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
