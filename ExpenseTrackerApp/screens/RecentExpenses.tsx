import React, { FC, useContext } from "react";
import { View, Text } from "react-native";
import { ExpensesOutput } from "../components/expensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";

export const RecentExpenses: FC = () => {
  const context = useContext(ExpensesContext);

  const recentExpenses = context?.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    if (expense.date) {
      return expense.date > date7DaysAgo;
    }
  });

  return <ExpensesOutput periodName="Last 7 Days" expenses={recentExpenses} />;
};
