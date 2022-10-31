import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Categories } from "./screens/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Meals } from "./screens/Meals";
import { RootStackParamList } from "./types";
import { MealDetailScreen } from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Favorites } from "./screens/Favorites";
import { Ionicons } from "@expo/vector-icons";
import { FavoritesContextProvider } from "./store/context/favorites-context";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerNavigatior = () => (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#351401",
      },
      headerTintColor: "white",
      sceneContainerStyle: {
        backgroundColor: "#38261c",
      },
      drawerContentStyle: { backgroundColor: "#38261c" },
      drawerInactiveTintColor: "white",
      drawerActiveTintColor: "#38261c",
      drawerActiveBackgroundColor: "#e4baa1",
    }}
  >
    <Drawer.Screen
      name="Categories"
      component={Categories}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons color={color} size={size} name="list" />
        ),
      }}
    />
    <Drawer.Screen
      name="Favorites"
      component={Favorites}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons color={color} size={size} name="star" />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="light" />
      <FavoritesContextProvider>
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
              name="DrawerCategories"
              component={DrawerNavigatior}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Meals" component={Meals} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {},
});
