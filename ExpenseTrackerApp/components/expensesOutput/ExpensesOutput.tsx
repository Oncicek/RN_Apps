import React, { FC } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { GlobalStyles } from "../../constants";
import { Expenses } from "../../types";
import { ExpensesList } from "./ExpensesList";
import { ExpensesSummary } from "./ExpensesSummary";

export const DUMMY_EXPENSES: Expenses[] = [
  {
    id: "e1",
    description: "Ahojky",
    amount: 354.99,
    date: new Date("2022-12-24"),
  },
  {
    id: "e2",
    description: "Cubky",
    amount: 15.99,
    date: new Date("2021-12-24"),
  },
  {
    id: "e3",
    description: "Kozy",
    amount: 50000.99,
    date: new Date("2021-12-19"),
  },
];

interface ExpensesOutputProps {
  expenses?: Expenses[];
  periodName: string;
}

export const ExpensesOutput: FC<ExpensesOutputProps> = ({
  expenses,
  periodName,
}) => {
  if (!expenses) {
    return (
      <View>
        <Text>Nič</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
  },
});
