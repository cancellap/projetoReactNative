import { View, Text, Platform } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Busca } from "../screens/Busca";
import { styles } from "./style";
import { FontAwesome, Foundation } from "@expo/vector-icons";
import { Home } from "../screens/Home";
import { useAuth } from "../hook/useAuth";
import { Cadastro } from "../screens/Cadastro";

const Tab = createBottomTabNavigator();

const TabRouters = () => {
  const { role } = useAuth();
  return (
    <Tab.Navigator
      screenOptions={{
        title: "",
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#176B87",
          height: Platform.OS == "ios" ? 90 : 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
      <Tab.Screen
        name="TabHome"
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
      {role == "ADMIN" && (
        <Tab.Screen
          name="TabCadastro"
          component={Cadastro}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <View style={styles.boxTabBar}>
                <FontAwesome
                  name="plus"
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
                  Cadastro
                </Text>
              </View>
            ),
          }}
        />
      )}
      <Tab.Screen
        name="TabSearch"
        component={Busca}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.boxTabBar}>
              <FontAwesome
                name="search"
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
