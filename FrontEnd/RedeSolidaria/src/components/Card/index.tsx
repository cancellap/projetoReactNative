import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useAuth } from "../../hook/useAuth";

interface CardProps {
  razaoSocial: string;
  tipo: string;
  onPress: () => void;
}

export const Card = ({ razaoSocial, tipo, onPress }: CardProps) => {
  const { role } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{razaoSocial}</Text>
      <Text style={styles.tipo}>{tipo}</Text>

      {role === "ADMIN" && (
        <TouchableOpacity style={styles.buttonDelete} onPress={onPress}>
          <Feather name="trash" size={20} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );
};
