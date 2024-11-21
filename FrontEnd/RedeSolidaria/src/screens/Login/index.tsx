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

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {

  if (!email || !password) {
    Alert.alert("Erro", "Por favor, preencha todos os campos :)");
    return;
  }

  setLoading(true);

  try {
    const response = await fetch("http://192.168.1.2:8080/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      Alert.alert("Sucesso", "Login realizado com sucesso!");
      navigation.navigate("Home");
    } else {

      Alert.alert("Erro", data.message || "Credenciais inválidas.");
    }

  } catch (error) {
    Alert.alert("Erro", "Algo deu errado. Tente novamente.");
    console.error(error);
  } 
   finally {
      setLoading(false); 
    }
};
////////////////////////////////////////////////

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

        <Text style={styles.msg}>Ainda não possui uma conta? </Text>
      
        <TouchableOpacity
        style={styles.ButtonCadastro}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.TextCadastro}>Cadastre-se</Text>
      </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};
