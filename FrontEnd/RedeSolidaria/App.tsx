import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Busca } from "./src/screens/Busca";

export default function App() {
  return (
    <View>
      <StatusBar style="dark" />
      <Busca/>
    </View>
  );
}
