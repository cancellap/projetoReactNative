import axios from "axios";
import React, { useState } from "react";
import { Image, Modal, Text, View } from "react-native";
import logo from "../../assets/logo.png";
import { ButtonTypes } from "../ButtonTypes";
import { TextInputField } from "../TextInput";
import { style } from "./style";

export const ModalCadastro = ({ isVisible, closeModal }: { isVisible: boolean; closeModal: () => void }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [endereco, setEndereco] = useState('');
  const [tipo, setTipo] = useState('');

  const handleSignUp = async () => {
      const data = { username, email, cnpj, endereco, tipo };

      try {
          const response = await axios.post('http://192.168.0.108:8080/instituicao', data);
          alert("Cadastro realizado com sucesso!");
          closeModal();
      } catch (error) {
          alert("Erro ao realizar o cadastro. Tente novamente.");
      }
  };

  return (
      <Modal
          animationType="fade"
          visible={isVisible}
          onRequestClose={closeModal}
      >
          <View style={style.container}>
              <Image source={logo} style={style.logo} />
              <Text style={style.text}>Bem vindo(a) à Rede Solidária</Text>
              <Text style={style.text}>Por favor realize seu cadastro</Text>
              <View style={style.boxMid}>
                  <TextInputField
                      placeHolder="Digite a Razão Social"
                      valueInput={username}
                      hadleFunctionInput={setUsername}
                      typeIcon="person"
                  />
                  <TextInputField
                      placeHolder="Digite seu email"
                      valueInput={email}
                      hadleFunctionInput={setEmail}
                      typeIcon="mail"
                  />
                  <TextInputField
                      placeHolder="Digite seu CNPJ"
                      valueInput={cnpj}
                      hadleFunctionInput={setCnpj}
                      typeIcon="business"
                  />
                  <TextInputField
                      placeHolder="Digite seu endereço"
                      valueInput={endereco}
                      hadleFunctionInput={setEndereco}
                      typeIcon="location"
                  />
                  <TextInputField
                      placeHolder="Digite o tipo de instituição"
                      valueInput={tipo}
                      hadleFunctionInput={setTipo}
                      typeIcon="location"
                  />
              </View>
              <View style={style.boxBottom}>
                  <ButtonTypes
                      title="Cadastrar"
                      handleFunction={handleSignUp}
                      propsBackgroundColor="#176B87"
                  />
                  <ButtonTypes title={'Fechar'} propsBackgroundColor="#176B87" handleFunction={closeModal}/>
              </View>
          </View>
      </Modal>
  );
};
