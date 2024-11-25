import axios from "axios";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import logo from "../../assets/logo.png";
import { ButtonTypes } from "../../components/ButtonTypes";
import { TextInputField } from "../../components/TextInput";
import { style } from "./style";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Cadastro = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    const data = {
      nome: username,
      email: email,
      senha: password,
      confirmaSenha: confirmPassword,
    };

    try {
      const response = await axios.post(
        "http://192.168.1.12:8080/usuarios",

        data
      );
      console.log("Usuário cadastrado com sucesso:");
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao realizar cadastro. Tente novamente.");
    }
  };
  const handleUsername = (value: string) => {
    setUsername(value);
  };

  const handleEmail = (value: string) => {
    setEmail(value);
  };
  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleConfirmPassword = (value: string) => {
    setConfirmPassword(value);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const navigate = useNavigation();

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={logo} style={style.logo} />
        <Text style={style.text}>Bem vindo(a) à Rede Solidária</Text>
        <Text style={style.text}>Por favor realize seu cadastro</Text>
      </View>
      <View style={style.boxMid}>
        <TextInputField
          placeHolder="Digite seu nome"
          valueInput={username}
          hadleFunctionInput={handleUsername}
          typeIcon="person"
        />
        <TextInputField
          placeHolder="Digite seu email"
          valueInput={email}
          hadleFunctionInput={handleEmail}
          typeIcon="mail"
        />
        <TextInputField
          placeHolder="Digite sua senha"
          valueInput={password}
          hadleFunctionInput={handlePassword}
          typeIcon="password"
        />
        <TextInputField
          placeHolder="Confirme sua senha"
          valueInput={confirmPassword}
          hadleFunctionInput={handleConfirmPassword}
          typeIcon="password"
        />
      </View>
      <View style={style.boxBottom}>
        <ButtonTypes
          title="Voltar"
          handleFunction={() => navigate.navigate("Login")}
          propsBackgroundColor="#c23c14"
        />
        <ButtonTypes
          title="Cadastrar"
          handleFunction={handleSignUp}
          propsBackgroundColor="#176B87"
        />
      </View>
    </View>
  );
};
