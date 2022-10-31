import React, { FC } from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface MealDetailsProps {
  duration: string;
  complexity: string;
  affordability: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const MealDetails: FC<MealDetailsProps> = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        ${affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    margin: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
