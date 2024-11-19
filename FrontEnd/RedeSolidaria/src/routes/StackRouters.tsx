import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRouters from "./TabRouters";

const Stack = createNativeStackNavigator();

const StackRouters = () => {
  return (
    <Stack.Navigator
      initialRouteName="StackLogin"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="StackLogin" component={Login} />
      <Stack.Screen name="StackHome" component={TabRouters} />
    </Stack.Navigator>
  );
};

export default StackRouters;
