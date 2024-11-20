import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

type PropsContext = {
  email: string;
  setEmail: (value: string) => void;
  checkToken: (email: string) => void;
  isLoading: boolean;
  token: string;
  setToken: (value: string) => void;
};

const AuthContext = createContext<PropsContext>({
  email: "",
  setEmail: () => {},
  checkToken: () => {},
  isLoading: false,
  token: "",
  setToken: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const navigation = useNavigation();
  const [token, setToken] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const checkToken = (email: string) => {
    setIsLoading(true);
    //requisicao para verificar se o token é válido
    axios.get("http://192.168.1.2:8080/usuarios", {
      headers: {
        Authorization: token,
      },
    });
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
        checkToken,
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
