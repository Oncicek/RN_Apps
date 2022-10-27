import React, { FC } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { CategoryGridTile } from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../data/models/category";
import { RootStackScreenProps } from "../types";

export const Categories: FC<RootStackScreenProps<"Categories">> = ({
  navigation,
}) => {
  const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
    const { item } = itemData;

    const pressHandler = () => {
      navigation.navigate("Meals", {
        categoryId: item.id,
      });
    };

    return (
      <CategoryGridTile
        color={item.color}
        title={item.title}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};
