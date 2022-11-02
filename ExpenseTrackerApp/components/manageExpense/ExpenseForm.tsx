import React, { FC } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Input } from "./Input";

export const ExpenseForm: FC = () => {
  const amountChangedHandler = () => {};

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});
