import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Busca } from "../screens/Busca";
import { styles } from "./style";
import { FontAwesome, Foundation } from "@expo/vector-icons";
import { Home } from "../screens/Home";

const Tab = createBottomTabNavigator();

const TabRouters = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        title: "",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#176B87",
          height: 90,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
      <Tab.Screen
        name="TabsHome"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.boxTabBar}>
              <Foundation
                name="home"
                size={focused ? 28 : size}
                color={focused ? "#EEF5FF" : "#B4D4FF"}
              />
              <Text
                style={[
                  styles.textTabRoute,
                  {
                    color: focused ? "#EEF5FF" : "#B4D4FF",
                  },
                ]}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TabSearch"
        component={Busca}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.boxTabBar}>
              <FontAwesome
                name="search"
                size={focused ? 30 : size}
                color={focused ? "#EEF5FF" : "#B4D4FF"}
              />
              <Text
                style={[
                  styles.textTabRoute,
                  {
                    color: focused ? "#d34742" : "#B4D4FF",
                  },
                ]}
              >
                Buscar
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRouters;
