import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { MealDetails } from "../MealDetails";

interface MealItemProps {
  data: {
    title: string;
    imageUrl: string;
    duration: string;
    complexity: string;
    affordability: string;
    id: string;
  };
}

export const MealItem: FC<MealItemProps> = ({
  data: { title, imageUrl, affordability, complexity, duration, id },
}) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.buttonPressed}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            affordability={affordability}
            complexity={complexity}
            duration={duration}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    margin: 8,
    justifyContent: "center",
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
