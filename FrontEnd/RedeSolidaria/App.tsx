import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Busca } from "./src/screens/Busca";
import { Instituicao } from "./src/screens/Instituicao";

export default function App() {
  return (
    <View>
      <StatusBar style="dark" />
      <Busca/>
      <Instituicao/>
    </View>
  );
}
