import { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default () => {
  const [goals, setGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setIsVisible(true);
  };

  const endAddGoalHandller = () => {
    setIsVisible(false);
  };

  const addGoalHandler = (input) => {
    setGoals((prevGoals) => [
      ...prevGoals,
      { text: input, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setGoals((prevGoals) => prevGoals.filter((item) => item.id !== id));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="pink"
          onPress={startAddGoalHandler}
        />
        {isVisible && (
          <GoalInput
            onCloseModal={endAddGoalHandller}
            onAddGoal={addGoalHandler}
            visible={isVisible}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={goals}
            renderItem={(itemData) => (
              <GoalItem
                onDeleteGoal={deleteGoalHandler}
                id={itemData.item.id}
                text={itemData.item.text}
              />
            )}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
  },
});
