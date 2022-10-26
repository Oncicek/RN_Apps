import React, { FC, ReactNode } from "react";
import { Text, StyleSheet } from "react-native";
import { Colours } from "../../data/colours";

interface TitleProps {
  children?: ReactNode;
}

export const Title: FC<TitleProps> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
