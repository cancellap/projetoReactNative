import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Cadastro } from './src/screens/Cadastro';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Cadastro/>
    </>
  );
}
