import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "../hook/useAuth";
import StackRouters from "./StackRouters";

export const Routers = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackRouters />
      </AuthProvider>
    </NavigationContainer>
  );
};
