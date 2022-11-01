import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  ManageExpense: undefined;
  RecentExpenses: undefined;
  AllExpenses: undefined;
  ExpensesOverview: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
