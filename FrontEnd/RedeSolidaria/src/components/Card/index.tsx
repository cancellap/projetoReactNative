import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";

type CardProps = {
  nome: string;
  tipo: string;
};

export const Card = ({ nome, tipo }: CardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.tipo}>{tipo}</Text>
    </View>
  );
};
