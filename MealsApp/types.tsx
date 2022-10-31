import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Categories: undefined;
  Meals: { categoryId: string };
  MealDetail: { mealId: string };
  DrawerCategories: undefined;
  Favorites: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
