import React, { FC, ReactNode } from "react";
import { Pressable, View, Text, StyleSheet, ViewStyle } from "react-native";
import { GlobalStyles } from "../../constants";

interface ButtonsProps {
  children: ReactNode;
  onPress: () => void;
  mode?: "flat" | "classic";
  style?: ViewStyle;
}

export const Buttons: FC<ButtonsProps> = ({
  children,
  onPress,
  mode,
  style,
}) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View
          style={[styles.generalButton, mode === "flat" && styles.flatStyle]}
        >
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  generalButton: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary400,
  },
  flatStyle: {
    backgroundColor: "trasparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
