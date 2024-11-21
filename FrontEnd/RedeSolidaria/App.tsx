import React from "react";
import { StatusBar } from "expo-status-bar";
import { Routers } from "./src/routes";
import { Cadastro } from "./src/screens/Cadastro";




export default function App() {
  return (

    <React.Fragment>
      <StatusBar style="dark" />
      <Routers />
    </React.Fragment>

  );
}
    

