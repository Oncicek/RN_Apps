import React, { FC, ReactNode } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
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

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colours.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colours.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
