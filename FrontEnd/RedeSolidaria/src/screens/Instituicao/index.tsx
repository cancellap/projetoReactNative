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

interface BuscaProps {
  idInstituicao: string; // Prop que define o ID da instituição a ser buscada
}

export const Busca = ({ idInstituicao }: BuscaProps) => {
  const [response, setResponse] = useState<ApiResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (idInstituicao) {
      getDataById(idInstituicao);
    }
  }, [idInstituicao]);

  const url = "https://673bea0496b8dcd5f3f7de4f.mockapi.io/projetoReactNative/Instituicao";

  // Função para buscar instituição por ID
  const getDataById = async (id: string) => {
    try {
      setLoading(true);
      const result = await axios.get(`${url}/${id}`);
      setResponse([result.data]); // Coloca o item em um array para usar no FlatList
    } catch (error) {
      console.log("Erro ao buscar dados", error);
    } finally {
      setLoading(false);
    }
  };

  return (
      <SearchBar />
      <FlatList
          data={response}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Card nome={item.nome} tipo={item.tipo} />}
        />
      )}
  );
};
