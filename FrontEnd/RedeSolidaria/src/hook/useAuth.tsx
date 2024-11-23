import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

type PropsContext = {
  role: string;
  setRole: (value: string) => void;
  nome: string;
  setNome: (value: string) => void;
  checkToken: (email: string) => void;
  isLoading: boolean;
  token: string;
  setToken: (value: string) => void;
  saveData: (token: string) => void;
};

const AuthContext = createContext<PropsContext>({
  role: "",
  setRole: () => {},
  nome: "",
  setNome: () => {},
  checkToken: () => {},
  isLoading: false,
  token: "",
  setToken: () => {},
  saveData: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const navigation = useNavigation();
  const [token, setToken] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const saveData = async (token: string) => {
    try {
      const jsonValue = JSON.stringify(token);
      await AsyncStorage.setItem("@InfoUser", jsonValue);
      console.log("Salvou", jsonValue);
    } catch (error) {
      console.log("Erro ao salvar dados!");
    }
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const value = await AsyncStorage.getItem("@InfoUser");
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        console.log("Pegou os dados", jsonValue);
        setToken(jsonValue);
        await checkToken(jsonValue);
      } else {
        console.log("Vazio");
      }
    } catch (error) {
      console.log("Erro ao buscar dados:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const checkToken = async (token: string) => {
    if (!token) {
      console.log("Token não encontrado ou inválido");
      return;
    }

    try {
      setIsLoading(true);
      // Faz a requisição para verificar o token
      const response = await axios.get(
        "http://192.168.1.65:8080/usuarios/user",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setRole(response.data.role);
      setNome(response.data.nome);
      console.log("Token válido");
      navigation.navigate("Home");
    } catch (error) {
      console.log("Erro ao validar o token:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
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
        saveData,
        nome,
        setNome,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
