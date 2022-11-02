import React, { FC } from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IconButtonProps {
  name: any;
  size: number;
  color?: string;
  onPress: () => void;
}

export const IconButton: FC<IconButtonProps> = ({
  name,
  color,
  size,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Ionicons name={name} color={color} size={size} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
