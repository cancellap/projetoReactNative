import axios from "axios";
import React, { useState } from "react";
import { Image, Modal, Text, View } from "react-native";
import logo from "../../assets/logo.png";
import { ButtonTypes } from "../ButtonTypes";
import { PickerTipo } from "../PIcker";
import { TextInputField } from "../TextInput";
import { style } from "./style";
import { Picker } from "@react-native-picker/picker";
import { BuscaGet } from "../../services/BuscaGet";
import { useNavigation } from "@react-navigation/native";

export const ModalCadastro = ({
  isVisible,
  closeModal,
}: {
  isVisible: boolean;
  closeModal: () => void;
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [endereco, setEndereco] = useState("");
  const [tipo, setTipo] = useState("");

  const handleSignUp = async () => {
    const data = { razaoSocial: username, email, cnpj, endereco, tipo };
    try {
      const response = await axios.post(
        "http://192.168.1.65:8080/instituicao",
        data
      );
      alert("Cadastro realizado com sucesso!");
      closeModal();
      navigate.navigate("TabSearch")
      console.log(tipo);
    } catch (error) {
      alert("Erro ao realizar o cadastro. Tente novamente.");
    }
  };
  const navigate = useNavigation();

  return (
    <Modal animationType="fade" visible={isVisible} onRequestClose={closeModal}>
      <View style={style.container}>
        <Image source={logo} style={style.logo} />
        <Text style={style.text}>Bem vindo(a) à Rede Solidária</Text>
        <Text style={style.text}>Por favor realize seu cadastro</Text>

        <View style={style.boxMid}>
          <TextInputField
            placeHolder="Razão Social"
            valueInput={username}
            hadleFunctionInput={setUsername}
            typeIcon="person"
          />
          <TextInputField
            placeHolder="Email"
            valueInput={email}
            hadleFunctionInput={setEmail}
            typeIcon="mail"
          />
          <TextInputField
            placeHolder="CNPJ"
            valueInput={cnpj}
            hadleFunctionInput={setCnpj}
            typeIcon="briefcase"
          />
          <TextInputField
            placeHolder="Endereço"
            valueInput={endereco}
            hadleFunctionInput={setEndereco}
            typeIcon="map"
          />
           <View style={style.pickerContainer}>
            <Picker
              selectedValue={tipo}
              onValueChange={(value) => setTipo(value)}
              style={style.picker}
            >
              <Picker.Item label="Selecione o tipo de instituição" value="" />
              <Picker.Item label="PRIVADA" value="PRIVADA" />
              <Picker.Item label="PUBLICA" value="PUBLICA" />
              <Picker.Item label="ONGS" value="ONGS" />
            </Picker>
            
          </View>
        </View>
        <View style={style.boxBottom}>
          <ButtonTypes
            title={"Fechar"}
            propsBackgroundColor="#c23c14"
            handleFunction={closeModal}
          />
          <ButtonTypes
            title="Cadastrar"
            handleFunction={handleSignUp}
            propsBackgroundColor="#176B87"
          />
        </View>
      </View>
    </Modal>
  );
};
