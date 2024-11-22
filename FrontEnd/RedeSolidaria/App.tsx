import React from "react";
import { StatusBar } from "expo-status-bar";
import { Routers } from "./src/routes";
import { AuthProvider } from "./src/hook/useAuth";

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="light" />
      <Routers />
    </React.Fragment>
  );
}
