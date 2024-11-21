import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

interface CardInstituicaoProps {
  razaoSocial: string;
  endereco: string;
  cnpj: string;
  email: string;
}

export const CardInstituicao = ({
  razaoSocial,
  endereco,
  cnpj,
  email,
}: CardInstituicaoProps) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>Razão Social: {razaoSocial}</Text>
      <Text style={styles.cardText}>Endereço: {endereco}</Text>
      <Text style={styles.cardText}>CNPJ: {cnpj}</Text>
      <Text style={styles.cardText}>Email: {email}</Text>
    </View>
  );
};