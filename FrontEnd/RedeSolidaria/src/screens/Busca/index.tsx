import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import axios from 'axios';
import { Card } from "../../components/Card";
import { SearchBar } from "../../components/SearchBar";

interface ApiResponse {
  id: string;
  razaoSocial: string;
  tipo: string;
}

export const Busca = () => {
  const [response, setResponse] = useState<ApiResponse[]>([]);
  const [value, setValue] = useState("");

  const getData = async (value: string) => {
    try {
      const url = `http://192.168.1.12:8080/instituicao/${value}`;
      const result = await axios.get(url);
      setResponse(result.data);
    } catch (error) {
      console.log("Erro ao buscar dados");
    }
  };

  const handleSearch = (text: string) => {
    setValue(text);
    getData(text);
  };

  return (
    <View>
      <SearchBar onSearch={handleSearch} value={value} />
      {response.length ? (
        <FlatList
          data={response}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card nome={item.razaoSocial} tipo={item.tipo} />
          )}
        />
      ) : (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Nenhuma instituição encontrada
        </Text>
      )}
    </View>
  );
};
