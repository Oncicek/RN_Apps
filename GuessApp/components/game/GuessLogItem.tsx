import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Colours } from "../../data/colours";

interface GuessLogItem {
  roundNumber: number;
  guess: number;
}

export const GuessLogItem: FC<GuessLogItem> = ({ guess, roundNumber }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemText: {
    fontFamily: "open-sans",
  },
  listItem: {
    borderColor: Colours.primaryApp,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colours.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
