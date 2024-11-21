import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

type PropsContext = {
  role: string;
  setRole: (value: string) => void;
  checkToken: (email: string) => void;
  isLoading: boolean;
  token: string;
  setToken: (value: string) => void;
};

const AuthContext = createContext<PropsContext>({
  role: "",
  setRole: () => {},
  checkToken: () => {},
  isLoading: false,
  token: "",
  setToken: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const navigation = useNavigation();
  const [token, setToken] = useState<string>("");

  const [role, setRole] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const checkToken = (email: string) => {
    setIsLoading(true);
    //requisicao para verificar se o token é válido
    axios.get("http://192.168.1.2:8080/usuarios/user", {
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
        role,
        setRole,
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
