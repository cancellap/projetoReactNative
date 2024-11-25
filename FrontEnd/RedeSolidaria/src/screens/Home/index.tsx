import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { HeaderHome } from "../../components/HeaderHome";
import { CardInstituicao } from "../../components/CardInstituicao";
import axios from "axios";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { AuthProvider, useAuth } from "../../hook/useAuth";

interface ApiResponse {
  id: string;
  razaoSocial: string;
  tipo: string;
  endereco: string;
  cnpj: string;
  email: string;
}

export const Home: React.FC = () => {
  const [response, setResponse] = useState<ApiResponse[]>([]);
  const { nome } = useAuth();

  const handlePress = () => {
    console.log("Botão pressionado!");
  };

  const getHome = async () => {
    try {

      const url = `http://192.168.1.65:8080/instituicao`;

      const result = await axios.get(url);

      if (result.data.length > 0) {
        const instituicaoAleatoria = result.data.sort(
          () => 0.5 - Math.random()
        );

        const instituicaoSelecionadas = instituicaoAleatoria.slice(0, 3);
        setResponse(instituicaoSelecionadas);
      }
    } catch (error) {
      console.log("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    getHome();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <HeaderHome nome={nome} />
          <Text style={styles.title}>Quem Somos </Text>
          <Text style={styles.subtitle}>
            O aplicativo Rede Solidária conecta doadores a instituições de
            caridade, públicas e privadas. Facilitamos doações seguras e
            transparentes, garantindo que a sua contribuição chegue a quem
            precisa. Junte-se a nós para transformar vidas e construir um futuro
            melhor, um gesto solidário de cada vez. 🌟
          </Text>

          {response.length > 0 ? (
            response.map((instituicao) => (
              <CardInstituicao
                key={instituicao.id}
                cnpj={instituicao.cnpj}
                razaoSocial={instituicao.razaoSocial}
                endereco={instituicao.endereco}
                email={instituicao.email}
              />
            ))
          ) : (
            <Text>Carregando instituições...</Text>
          )}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

