import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
const image = require("../assets/images/goal.png");

export const GoalInput = (props) => {
  const [input, setInput] = useState("");

  const goalInputHandler = (text) => {
    setInput(text);
  };

  const addGoalHandler = () => {
    props.onAddGoal(input);
    props.onCloseModal();
    setInput("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={image} />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Type a new goal"
          value={input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onCloseModal}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    marginRight: 8,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
