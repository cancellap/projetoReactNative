import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import { Card } from "../../components/Card";
import { SearchBar } from "../../components/SearchBar";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ModalCadastro } from "../../components/Modal/modalCadastro";
import { useAuth } from "../../hook/useAuth";
import { styles } from "./style";
import { ButtonModal } from "../../components/ButtonModal";

interface ApiResponse {
  id: string;
  razaoSocial: string;
  tipo: string;
}

export const Busca = () => {
  const { token, role } = useAuth();
  const [response, setResponse] = useState<ApiResponse[]>([]);
  const [filteredResponse, setFilteredResponse] = useState<ApiResponse[]>([]);
  const [value, setValue] = useState("");

  const navigate = useNavigation();

  const getHome = async () => {
    try {
      const url = `http://192.168.1.12:8080/instituicao`;

      const result = await axios.get(url, {
        headers: {
          Authorization: token,
        },
      });

      setResponse(result.data);
      setFilteredResponse(result.data);
    } catch (error) {
      console.log("Erro ao buscar dados:", error);
    }
    console.log("get Home");
  };

  const deleteInstituicao = async (id: string) => {
    try {
      await axios.delete(`http://192.168.1.12:8080/instituicao/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      console.log("Instituição deletada");
      getHome();
    } catch (error) {
      console.log("Erro ao deletar:", error);
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

  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  useEffect(() => {
    if (!isModalVisible) {
      getHome();
    }
  }, [isModalVisible]);

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
              <Card
                razaoSocial={item.razaoSocial}
                tipo={item.tipo}
                onPress={() => deleteInstituicao(item.id)}
              />
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
      {role === "ADMIN" && (
        <View style={styles.modal}>
          <ButtonModal
            handleFunction={openModal}
            propsBackgroundColor="#176B87"
          />
          {isModalVisible && (
            <ModalCadastro isVisible={isModalVisible} closeModal={closeModal} />
          )}
        </View>
      )}
    </View>
  );
};
