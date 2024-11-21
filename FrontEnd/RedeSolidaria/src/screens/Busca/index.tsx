import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import { Card } from "../../components/Card";
import { SearchBar } from "../../components/SearchBar";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";

interface ApiResponse {
  id: string;
  razaoSocial: string;
  tipo: string;
}

export const Busca = () => {
  const [response, setResponse] = useState<ApiResponse[]>([]);
  const [filteredResponse, setFilteredResponse] = useState<ApiResponse[]>([]);
  const [value, setValue] = useState("");

  const navigate = useNavigation();

  const getHome = async () => {
    try {
      const url = `http://192.168.1.12:8080/instituicao`;
      const result = await axios.get(url);
      setResponse(result.data);
      setFilteredResponse(result.data); // Inicializa a lista filtrada com todos os dados
    } catch (error) {
      console.log("Erro ao buscar dados:", error);
    }
  };

  const handleSearch = (text: string) => {
    setValue(text);
    const filtrado = response.filter((item) =>
      item.razaoSocial.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredResponse(filtrado);
  };

  const goToInstituicao = (id: number) => {
    navigate.navigate("Instituicao", {
      id: id,
      nome: "Instituicao",
    });
  };

  useEffect(() => {
    getHome();
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} value={value} />
      {filteredResponse.length > 0 ? (
        <FlatList
          data={filteredResponse}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => goToInstituicao(parseInt(item.id))}
              activeOpacity={0.89}
            >
              <Card razaoSocial={item.razaoSocial} tipo={item.tipo} />
            </TouchableOpacity>
          )}
        />
      ) : (
        <View>
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Nenhuma instituição encontrada
          </Text>
        </View>
      )}
    </View>
  );
};
