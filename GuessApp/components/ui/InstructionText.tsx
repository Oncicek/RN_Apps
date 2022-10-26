import React, { FC, ReactNode } from "react";
import { Text, StyleSheet, TextStyle, StyleProp } from "react-native";
import { Colours } from "../../data/colours";

interface InstructionTextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

export const InstructionText: FC<InstructionTextProps> = ({
  children,
  style,
}) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colours.accent500,
    fontSize: 24,
  },
});
