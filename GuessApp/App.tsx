import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { Colours } from "./data/colours";
import { GameOverScreen } from "./screens/GameOverScreen";
import { GameScreen } from "./screens/GameScreen";
import { StartGameScreen } from "./screens/StartGameScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | undefined>();
  const [isGameOver, setIsGameOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  const [areFontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!areFontsLoaded) {
    return <AppLoading />;
  }

  const startGameHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  };

  const gameOverHandler = (number: number) => {
    setIsGameOver(true);
    setRounds(number);
  };

  const startNewGameHandler = () => {
    setUserNumber(undefined);
    setRounds(0);
  };

  let screen = <StartGameScreen onStartNumber={startGameHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen onGameOver={gameOverHandler} pickedNumber={userNumber} />
    );
  }

  if (isGameOver && userNumber) {
    screen = (
      <GameOverScreen
        roundsNumber={rounds}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colours.primaryApp, Colours.accent500]}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageBckg}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageBckg: {
    opacity: 0.15,
  },
});
