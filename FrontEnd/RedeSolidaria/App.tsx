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
<<<<<<< HEAD
    <View>
      {/* <StatusBar style="dark" />
      <Busca/> */}
=======
    <React.Fragment>
      <StatusBar style="dark" />
      <Busca/>
>>>>>>> 6559bd0f2c86745a3f09377f2fcbe468222fc167
      <Home />
    </View>
      {/* <Busca /> */}
      {/* <Instituicao /> */}
      <Routers />
      {/* <Login /> */}
    </React.Fragment>
  );
}
