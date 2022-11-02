import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "./types";
import { ManageExpense } from "./screens/ManageExpense";
import { RecentExpenses } from "./screens/RecentExpenses";
import { AllExpenses } from "./screens/AllExpenses";
import { GlobalStyles } from "./constants";
import { Ionicons } from "@expo/vector-icons";
import { IconButton } from "./components/UI/IconButton";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Bottomtabs = createBottomTabNavigator<RootStackParamList>();

const ExpensesOverview = () => {
  return (
    <Bottomtabs.Navigator
      screenOptions={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            name={"add"}
            size={24}
            color={tintColor}
            onPress={() => navigation.navigate("ManageExpense")}
          />
        ),
      })}
    >
      <Bottomtabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <Bottomtabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Bottomtabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary500,
            },

            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name={"ExpensesOverview"}
            component={ExpensesOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name={"ManageExpense"} component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
