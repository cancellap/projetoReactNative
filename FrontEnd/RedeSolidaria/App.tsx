import React from "react";
import { StatusBar } from "expo-status-bar";
import { Routers } from "./src/routes";
import { AuthProvider } from "./src/hook/useAuth";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
   <React.Fragment>
      <StatusBar style="light" />
      <Routers />
    </React.Fragment>
    </GestureHandlerRootView>
  );
}
