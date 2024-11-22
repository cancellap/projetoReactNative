import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";

export const HeaderHome = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Seja bem-vindo, Fulano ⭐</Text>
      </View>
    </SafeAreaView>
  );
};
