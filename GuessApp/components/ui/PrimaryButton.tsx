import { FC, ReactNode } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colours } from "../../data/colours";

interface PrimaryButtonProps {
  children?: ReactNode;
  onPress?: () => void;
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? styles.buttonInnerContainer
            : [styles.pressed, styles.buttonInnerContainer]
        }
        onPress={onPress}
        android_ripple={{ color: Colours.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colours.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
