import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View, Text } from "react-native";
import axios from "axios";
import { Card } from "../../components/Card";
import { SearchBar } from "../../components/SearchBar";
import { styles } from "./style"; 
interface ApiResponse {
  id: string;
  razaoSocial: string;
  endereco: string;
  cnpj: string;
  email: string;
}

interface BuscaProps {
  idInstituicao: string;
}

export const Busca = ({ idInstituicao }: BuscaProps) => {
  const [response, setResponse] = useState<ApiResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (idInstituicao) {
      getDataById(idInstituicao);
    }
  }, [idInstituicao]);

  const url = `http://192.168.3.1:8080/instituicao/${idInstituicao}`;

  const getDataById = async (id: string) => {
    try {
      setLoading(true);
      const result = await axios.get(url);
      setResponse([result.data]); 
    } catch (error) {
      console.log("Erro ao buscar dados");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
    <FlatList
          data={response}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <Card
                razaoSocial={item.razaoSocial}
                endereco={item.endereco}
                cnpj={item.cnpj}
                email={item.email}
              />
            </View>
          )}
        />
    </SafeAreaView>
  );
};
