import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Categories } from "./screens/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Meals } from "./screens/Meals";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#38261c",
            },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{
              title: "All categories",
            }}
          />
          <Stack.Screen name="Meals" component={Meals} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
