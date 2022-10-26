import React, { FC } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Title } from "../components/ui/Title";
import { Colours } from "../data/colours";

interface GameOverScreenProps {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
}

export const GameOverScreen: FC<GameOverScreenProps> = ({
  onStartNewGame,
  roundsNumber,
  userNumber,
}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colours.primary500,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colours.primaryApp,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    widht: "100%",
    height: "100%",
  },
});
