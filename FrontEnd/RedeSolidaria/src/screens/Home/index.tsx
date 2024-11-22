import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

export const Home: React.FC = () => {
  const handlePress = () => {
    console.log("Botão pressionado!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rede Solidária</Text>
      <Text style={styles.title}>Quem Somos</Text>
      <Text style={styles.subtitle}>
        O aplicativo Rede Solidária conecta doadores a instituições de caridade,
        públicas e privadas. Facilitamos doações seguras e transparentes,
        garantindo que a sua contribuição chegue a quem precisa. Junte-se a nós
        para transformar vidas e construir um futuro melhor, um gesto solidário
        de cada vez. 🌟
      </Text>

      <View>
        <TouchableOpacity style={styles.Button} onPress={handlePress}>
          <Text>Doe agora s2!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
