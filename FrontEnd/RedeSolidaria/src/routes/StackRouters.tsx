import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import TabRouters from "./TabRouters";
import { Instituicao } from "../screens/Instituicao";
import { Cadastro } from "../screens/Cadastro";

const Stack = createNativeStackNavigator();

const StackRouters = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Instituicao" component={Instituicao} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={TabRouters} />
    </Stack.Navigator>
  );
};

export default StackRouters;
