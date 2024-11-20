import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackRouters from "./StackRouters";
import TabRouters from "./TabRouters";
import { AuthProvider } from "../hook/useAuth";

export const Routers = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackRouters />
      </AuthProvider>
    </NavigationContainer>
  );
};
