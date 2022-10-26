import React, { FC, ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colours } from "../../data/colours";

interface NumberContainerProps {
  children?: ReactNode;
}

export const NumberContainer: FC<NumberContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colours.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colours.accent500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
