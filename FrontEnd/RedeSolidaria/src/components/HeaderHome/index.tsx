import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";

type PropsHeader = {
  nome: string;
};
export const HeaderHome = ({ nome }: PropsHeader) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Seja bem-vindo, {nome} ⭐</Text>
      </View>
    </SafeAreaView>
  );
};
