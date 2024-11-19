
import React from 'react';
import { Login } from './src/screens/Login';
import { StatusBar } from "expo-status-bar";


export default function App() {

  return (
    <View>
      <StatusBar style="dark" />
      <Login/>
    </View>
  );
}

