import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

interface ListProps {
  data: string[];
}

export const List: FC<ListProps> = ({ data }) => {
  return (
    <>
      {data.map((dataItem: string) => (
        <View style={styles.listItem} key={dataItem}>
          <Text style={styles.itemText}>{dataItem}</Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
