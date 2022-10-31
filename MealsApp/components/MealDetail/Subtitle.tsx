import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

interface SubtitleProps {
  text: string;
}

export const Subtitle: FC<SubtitleProps> = () => {
  return (
    <View style={styles.subtitleContainre}>
      <Text style={styles.subtitle}>Steps</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitleContainre: {
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
    padding: 4,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
