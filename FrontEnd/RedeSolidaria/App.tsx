import React from "react";
import { StatusBar } from "expo-status-bar";
import { Routers } from "./src/routes";

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="light" />
      <Routers />
    </React.Fragment>
  );
}
