import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  ManageExpense: { expenseId?: string };
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

export interface Expenses {
  amount?: number;
  id?: string;
  description?: string;
  date?: Date;
}
