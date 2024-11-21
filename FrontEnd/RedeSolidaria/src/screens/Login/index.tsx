import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import { TextInputField } from "../../components/TextInput";
import { styles } from "./style";
import Logo from "../../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useAuth } from "../../hook/useAuth";

export const Login = () => {
  const { token, setToken, saveData } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigation();

  const handleLogin = () => {
    Alert.alert("Botão para realizar login");
    axios
      .post("http://192.168.1.2:8080/login", {
        email: email,
        senha: password,
      })
      .then(async (response) => {
        console.log("Funcionou!");
        const authToken = response.headers["authorization"]; // Obtenha o token diretamente da resposta
        console.log("Token recebido:", authToken);

        setToken(authToken); // Atualiza o estado do token
        await saveData(authToken); // Salva o token diretamente no AsyncStorage

        navigation.navigate("StackHome");
      })
      .catch(() => {
        console.log("Erro ao fazer login");
      });
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.titulo}>SEJA BEM VINDO(A)</Text>
        <View style={styles.boxForms}>
          <TextInputField
            placeHolder="Digite seu email"
            typeInput={false}
            valueInput={email}
            hadleFunctionInput={handleEmail}
            typeIcon="person"
          />

          <TextInputField
            placeHolder="Digite sua senha"
            valueInput={password}
            hadleFunctionInput={handlePassword}
            typeInput={true}
            typeIcon="password"
          />

          <TouchableOpacity onPress={handleLogin} style={styles.ButtonLogin}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
