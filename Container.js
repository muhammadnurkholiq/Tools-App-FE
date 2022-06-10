import * as React from "react";

// navigation container
import { NavigationContainer } from "@react-navigation/native";

// stack navigation
import { createStackNavigator } from "@react-navigation/stack";

// bottom navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// icon
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// theme native base
// import { useTheme } from "native-base";

// screen
import CalculatorScreen from "./src/screens/Calculator";
import Page2 from "./src/screens/Page2";

// create stack navigation
const Stack = createStackNavigator();

// create bottom navigation
const Tab = createBottomTabNavigator();
// tabs bottom navigator
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: "#FFA0A0" },
        headerTitleStyle: {
          fontWeight: "800",
          fontSize: 30,
          letterSpacing: 1,
          color: "#fff",
        },
        headerTitleAlign: "center",
        tabBarIcon: ({ focused }) => {
          let iconName, iconColor;

          if (route.name === "Calculator") {
            iconName = focused ? "calculator" : "calculator-outline";
            iconColor = focused ? "#FF5757" : "#FFA0A0";
            return <Ionicons name={iconName} size={24} color={iconColor} />;
          } else if (route.name === "Page2") {
            iconName = focused
              ? "clipboard-check-multiple"
              : "clipboard-check-multiple-outline";
            iconColor = focused ? "#FF5757" : "#FFA0A0";
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={24}
                color={iconColor}
              />
            );
          }
        },
        tabBarActiveTintColor: "#FF5757",
        tabBarInactiveTintColor: "#FFA0A0",
      })}
    >
      <Tab.Screen name="Calculator" component={CalculatorScreen} />
      <Tab.Screen name="Page2" component={Page2} />
    </Tab.Navigator>
  );
}

export default function Container() {
  // init theme
  // const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MyTabs}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
