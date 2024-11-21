import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Busca } from "./src/screens/Busca";
import { Home } from "./src/screens/Home/index";

export default function App() {
  return (
    <View>
      {/* <StatusBar style="dark" />
      <Busca/> */}
      <Home />

    </View>
  );
}
