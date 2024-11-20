import { useNavigation } from "@react-navigation/native";
import { createContext, useContext, useEffect, useState } from "react";

type PropsContext = {
  email: string;
  setEmail: (value: string) => void;
  checkAuthentication: (email: string) => void;
  isLoading: boolean;
  token: string;
  setToken: (value: string) => void;
};

const AuthContext = createContext<PropsContext>({
  email: "",
  setEmail: () => {},
  checkAuthentication: () => {},
  isLoading: false,
  token: "",
  setToken: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const navigation = useNavigation();
  const [token, setToken] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const checkAuthentication = (email: string) => {
    setIsLoading(true);
    //processo de autenticacao
    navigation.navigate("StackHome");
    setIsLoading(false);
  };

  useEffect(() => {
    //carregar informacoes do async storage, verificar se o token é valido
  }, []);

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        checkAuthentication,
        isLoading,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
