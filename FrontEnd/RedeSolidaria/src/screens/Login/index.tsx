import React, { useState } from "react";
import { Alert, Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View, Image } from "react-native";
import { TextInputField } from "../../components/TextInput";
import { styles } from "./style";
import Logo from '../../../assets/logo.png';


export const Login = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    Alert.alert("Botão para realizar login");
    console.log('Pegando informações', email, password)
  }

  const handlePassword = (value: string) => {
    setPassword(value);
  }

  const handleEmail = (value: string) => {
    setEmail(value);
  }

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
           <Image source={Logo} style={styles.logo} /> 
               <Text style={styles.titulo}>SEJA BEM VINDO(A)</Text>
               <View  style={styles.boxForms}>
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

              <TouchableOpacity style={styles.ButtonLogin}>
               <Text style = {styles.text}>Login</Text>
              </TouchableOpacity>
              </View>

              </View>

        </TouchableWithoutFeedback>
      )
}

