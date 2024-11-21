import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import TabRouters from "./TabRouters";
import { Instituicao } from "../screens/Instituicao";

const Stack = createNativeStackNavigator();

const StackRouters = () => {
  return (
    <Stack.Navigator
      initialRouteName="StackLogin"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="StackInstituicao" component={Instituicao}/>
      <Stack.Screen name="StackLogin" component={Login} />
      <Stack.Screen name="StackHome" component={TabRouters} />
    </Stack.Navigator>
  );
};

export default StackRouters;
