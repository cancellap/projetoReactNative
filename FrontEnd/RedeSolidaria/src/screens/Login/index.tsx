import React, { useState } from "react";
import {Alert,Keyboard,Text, TouchableOpacity,TouchableWithoutFeedback,View, Image,} from "react-native";
import { TextInputField } from "../../components/TextInput";
import { styles } from "./style";
import Logo from "../../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
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
    const response = await axios.post
    ("http://192.168.1.2:8080/login", {
      email, senha : password,
      setTimeout: 20000

    })
    
   
    if (response.status === 200) {
      navigation.navigate("Home");
    } else {
      Alert.alert("Erro", "Credenciais inválidas!");
    }

  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        Alert.alert("Erro", error.response.data.message || "Credenciais inválidas!");
      } else if (error.request) {
        Alert.alert("Erro", "Não foi possível conectar ao servidor. Tente novamente mais tarde.");
      }
    } else {
      Alert.alert("Erro", "Algo deu errado:/ Tente novamente.");
    }
  } finally {
    setLoading(false);
  }
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