import React from "react";
import EventList from "./Screens/EventList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import EventForm from "./Screens/EventForm";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="events"
          component={EventList}
          options={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              textTransform: "capitalize",
            },
            headerTitle: "Events",
            headerTintColor: "#FFFFFF",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="form"
          component={EventForm}
          options={{
            headerTitle: "Add Event",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              textTransform: "capitalize",
              color: "#FFF",
            },
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerBackTitle: "",
            headerBackTitleStyle: {
              color: "#FFF",
            },
            headerTintColor: "white",
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
