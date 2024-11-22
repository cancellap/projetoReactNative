import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Routers } from "./src/routes";


export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="dark" />
      
      {/* <Busca /> */}
      {/* <Instituicao /> */}
     {/*   <Cadastro/> */}
      <Routers /> 
    </React.Fragment>

  );
}
    

