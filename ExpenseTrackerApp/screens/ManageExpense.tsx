import { useNavigation, useRoute } from "@react-navigation/native";
import React, { FC, useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "../components/UI/IconButton";
import { Buttons } from "../components/UI/Buttons";
import { GlobalStyles } from "../constants";
import { RootStackParamList, RootStackScreenProps } from "../types";
import { ExpensesContext } from "../store/expenses-context";

export const ManageExpense: FC<RootStackScreenProps<"ManageExpense">> = ({
  navigation,
  route,
}) => {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  const context = useContext(ExpensesContext);

  const closeModal = () => {
    navigation.goBack();
  };

  const deleteExpenseHandler = (id: string) => {
    context?.deleteExpense(id);
    closeModal();
  };
  const cancelHandler = () => {
    closeModal();
  };
  const confirmHandler = () => {
    if (isEditing) {
      context?.updateExpense("e1", {
        amount: 70000,
        date: new Date(),
        description: "prdele",
      });
    } else {
      context?.addExpense({
        amount: 78,
        date: new Date(),
        description: "Cecky",
        id: "re",
      });
    }
    closeModal();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit expense" : "Add expense",
    });
  }, [isEditing, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Buttons mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Buttons>
        <Buttons mode="classic" onPress={confirmHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </Buttons>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={() => deleteExpenseHandler(expenseId)}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
