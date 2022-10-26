import React, { FC, useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Title } from "../components/ui/Title";
import { Colours } from "../data/colours";

interface StartGameScreenProps {
  onStartNumber: (number: number) => void;
}

export const StartGameScreen: FC<StartGameScreenProps> = ({
  onStartNumber,
}) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Number has to be between 1 - 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetInputHandler,
        },
      ]);
      return;
    }

    onStartNumber(chosenNumber);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.screenContainer}>
      <Title>Guess my number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  input: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colours.accent500,
    borderBottomWidth: 2,
    color: Colours.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
