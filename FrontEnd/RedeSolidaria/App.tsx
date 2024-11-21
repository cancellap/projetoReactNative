import React from "react";
import { Login } from "./src/screens/Login";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Busca } from "./src/screens/Busca";
import { Home } from "./src/screens/Home/index";
import { Instituicao } from "./src/screens/Instituicao";
import { Routers } from "./src/routes";

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="dark" />
      <Routers />
    </React.Fragment>
  );
}
// </View>
{
  /* <Busca /> */
}
{
  /* <Instituicao /> */
}
// <Routers />
{
  /* <Login /> */
}
