import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";

type CardProps = {
  razaoSocial: string;
  tipo: string;
};

export const Card = ({ razaoSocial, tipo }: CardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{razaoSocial}</Text>
      <Text style={styles.tipo}>{tipo}</Text>
    </View>
  );
};
