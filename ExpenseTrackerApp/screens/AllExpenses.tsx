import React, { FC } from "react";
import { View, Text } from "react-native";
import { ExpensesOutput } from "../components/expensesOutput/ExpensesOutput";

interface AllExpensesProps {}

export const AllExpenses: FC<AllExpensesProps> = () => {
  return <ExpensesOutput periodName="Last 7 days" />;
};
