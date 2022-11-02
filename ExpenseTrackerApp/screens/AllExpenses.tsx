import React, { FC, useContext } from "react";
import { ExpensesOutput } from "../components/expensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

interface AllExpensesProps {}

export const AllExpenses: FC<AllExpensesProps> = () => {
  const context = useContext(ExpensesContext);
  return (
    <ExpensesOutput expenses={context?.expenses} periodName="All Expenses" />
  );
};
