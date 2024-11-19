import { useNavigation } from "@react-navigation/native";
import { createContext, useContext, useEffect, useState } from "react";

type PropsContext = {
  email: string;
  setEmail: (value: string) => void;
  checkAuthentication: (email: string) => void;
  isLoading: boolean;
};

const AuthContext = createContext<PropsContext>({
  email: "",
  setEmail: () => {},
  checkAuthentication: () => {},
  isLoading: false,
});

export const AuthProvider = ({ children }: any) => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const checkAuthentication = (email: string) => {
    setIsLoading(true);
    navigation.navigate("StackHome");
    setIsLoading(false);
  };

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        checkAuthentication,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
