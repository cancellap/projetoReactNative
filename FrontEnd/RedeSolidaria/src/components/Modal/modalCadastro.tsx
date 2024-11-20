import { View, Text, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import { TextInputField } from '../TextInput'
import logo from '../../assets/logo.png'
import { ButtonTypes } from '../ButtonTypes'
import { style } from './style'

export const modalCadastro = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] =  useState('');
    const [openModal, setOpenModal] = useState(false);

    function handleSignUp(){
        const data= {
         username,
         email,
         cnpj,
         endereco
        }
        console.log(data);
               
     }
     const handleUsername = (value: string) => {
         setUsername(value);
       }
     
       const handleEmail = (value: string) => {
         setEmail(value);
       }
       const handleCnpj = (value: string) => {
         setCnpj(value);
       }
     
       const handleEndereco = (value: string) => {
         setEndereco(value);
       }

  return (
    <Modal
    animationType='fade'
    visible={openModal}
    style={style.modal}
    >
      <View style={style.container}>
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
                  valueInput={cnpj}
                  hadleFunctionInput={handleCnpj}
                  typeIcon="password"
                />
            <TextInputField
                  placeHolder="Confirme sua senha"
                  valueInput={endereco}
                  hadleFunctionInput={handleEndereco}
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
    </Modal>
  )
}
