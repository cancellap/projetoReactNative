
import React from 'react';
import { Login } from './src/screens/Login';
import { StatusBar } from "expo-status-bar";
import { View } from 'react-native';
import { Cadastro } from './src/screens/Cadastro';


export default function App() {

  return (
    <View>
      <StatusBar style="dark" />
      <Cadastro/>
    </View>
  );
}

