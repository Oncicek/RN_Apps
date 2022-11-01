import React, { FC } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ExpensesList } from "./ExpensesList";
import { ExpensesSummary } from "./ExpensesSummary";

interface ExpensesOutputProps {
  expenses: (string | number)[];
}

export const ExpensesOutput: FC<ExpensesOutputProps> = ({ expenses }) => {
  return (
    <View>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
};
