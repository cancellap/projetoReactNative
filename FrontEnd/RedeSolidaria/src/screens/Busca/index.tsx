import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import axios from "axios";
import { Card } from "../../components/Card";
import { SearchBar } from "../../components/SearchBar";

interface ApiResponse {
  id: string;
  nome: string;
  tipo: string;
}

export const Busca = () => {
  const [response, setResponse] = useState<ApiResponse[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const url =
    "https://673bea0496b8dcd5f3f7de4f.mockapi.io/projetoReactNative/Instituicao";

  const getData = async () => {
    try {
      const result = await axios.get(url);
      setResponse(result.data);

      // console.log(result.data);
    } catch (error) {
      console.log("Erro ao buscar dados", error);
    } finally {
    }
    console.log(response);
  };

  return (
    <View>
      <SearchBar />
      <FlatList
        data={response}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card nome={item.nome} tipo={item.tipo} />}
      />
      {/* <Card nome="aaaaaaaaa" tipo="a" /> */}
    </View>
  );
};
