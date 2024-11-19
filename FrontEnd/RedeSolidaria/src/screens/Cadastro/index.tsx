import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { style } from './style'
import logo from '../../assets/logo.png'
import { ButtonTypes } from '../../components/ButtonTypes'
import { TextInputField } from '../../components/TextInput'

export const Cadastro = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] =  useState('');

    function handleSignUp(){
       const data= {
        username,
        email,
        password,
        confirmPassword
       }
       console.log(data);
              
    }
    const handleUsername = (value: string) => {
        setUsername(value);
      }
    
      const handleEmail = (value: string) => {
        setEmail(value);
      }
      const handlePassword = (value: string) => {
        setPassword(value);
      }
    
      const handleConfirmPassword = (value: string) => {
        setConfirmPassword(value);
      }

  return (
    <View style={style.container}>
        <View style={style.boxTop}>
            <Image source={logo} style={style.logo}/>
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
                  typeIcon='mail'
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
                title="Cadastrar"
                handleFunction={handleSignUp}
                propsBackgroundColor="#176B87"
            />
        </View>
    </View>
  )
}