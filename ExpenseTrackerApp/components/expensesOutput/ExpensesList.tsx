import React, { FC } from "react";
import { FlatList, ListRenderItemInfo, Text } from "react-native";
import { Expenses } from "../../types";
import { ExpenseItem } from "./ExpenseItem";

interface ExpensesListProps {
  expenses: Expenses[];
}

const renderExpenseItem = (itemData: ListRenderItemInfo<Expenses>) => (
  <ExpenseItem {...itemData.item} />
);

export const ExpensesList: FC<ExpensesListProps> = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};
