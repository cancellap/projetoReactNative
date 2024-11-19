import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabRouters = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabHome" component={Home} />
      <Tab.Screen name="TabSearch" component={Busca} />
    </Tab.Navigator>
  );
};

export default TabRouters;
