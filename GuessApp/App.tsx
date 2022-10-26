import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { Colours } from "./data/colours";
import { GameScreen } from "./screens/GameScreen";
import { StartGameScreen } from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | undefined>();

  const startGameHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
  };

  const screen = userNumber ? (
    <GameScreen pickedNumber={userNumber} />
  ) : (
    <StartGameScreen onStartNumber={startGameHandler} />
  );

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
