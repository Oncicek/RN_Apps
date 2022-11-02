import { createContext, FC, ReactNode, useReducer } from "react";
import { DUMMY_EXPENSES } from "../components/expensesOutput/ExpensesOutput";
import { Expenses } from "../types";

enum ExpenseActionType {
  ADD = "ADD",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}

interface ExpenseAction {
  type: ExpenseActionType;
  payload: { id?: string; expenses?: Expenses };
}

interface ExpensesContextType {
  expenses: Expenses[];
  addExpense: (expenses: Expenses) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, expenses: Expenses) => void;
}

export const ExpensesContext = createContext<ExpensesContextType | null>(null);

const expensesReducer = (
  state: Expenses[],
  action: ExpenseAction
): Expenses[] => {
  switch (action.type) {
    case ExpenseActionType.ADD:
      const id = new Date().toString() + Math.random().toString();
      const newState = [{ ...action.payload.expenses, id }, ...state];
      return newState;

    case ExpenseActionType.UPDATE:
      const updatetableExpenseIndex = state.findIndex(
        (expenses) => expenses.id === action.payload.id
      );
      const updatableExpense = state[updatetableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.expenses };
      const updatedExpenses = [...state];
      updatedExpenses[updatetableExpenseIndex] = updatedItem;
      return updatedExpenses;

    case ExpenseActionType.DELETE:
      return state.filter((expense) => expense.id !== action.payload.id);

    default:
      return state;
  }
};

export const ExpensesContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenses: Expenses) => {
    dispatch({ type: ExpenseActionType.ADD, payload: { expenses } });
  };

  const deleteExpense = (id: string) => {
    dispatch({ type: ExpenseActionType.DELETE, payload: { id } });
  };

  const updateExpense = (id: string, expenses: Expenses) => {
    dispatch({
      type: ExpenseActionType.UPDATE,
      payload: { id: id, expenses },
    });
  };

  const value: ExpensesContextType = {
    addExpense,
    deleteExpense,
    updateExpense,
    expenses: expensesState,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};
