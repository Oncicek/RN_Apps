import React, { FC } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
  StyleSheet,
  TextInputProps,
} from "react-native";
import { GlobalStyles } from "../../constants";

interface InputProps {
  label: string;
  textInputConfig?: TextInputProps;
}

export const Input: FC<InputProps> = ({ label, textInputConfig }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...textInputConfig} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 16,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
});
