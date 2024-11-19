import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackRouters from "./StackRouters";

export const Routers = () => {
  return (
    <NavigationContainer>
      <StackRouters />
    </NavigationContainer>
  );
};
