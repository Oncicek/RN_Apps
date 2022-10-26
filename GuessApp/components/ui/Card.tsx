import React, { FC, ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { Colours } from "../../data/colours";

interface CardProps {
  children?: ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colours.primary700,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { height: 0, width: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
