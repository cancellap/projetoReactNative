import React from "react";
import { Login } from "./src/screens/Login";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Routers } from "./src/routes";

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="dark" />
      <Routers />
      {/* <Login /> */}
    </React.Fragment>
  );
}
