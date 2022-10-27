import { StyleSheet, View, Text, Pressable } from "react-native";

export const GoalItem = (props) => (
  <View style={styles.goalItem}>
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={() => props.onDeleteGoal(props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
