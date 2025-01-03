import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { CardInstituicao } from "../../components/CardInstituicao";
import { SearchBar } from "../../components/SearchBar";
import { styles } from "./style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsStack } from "../../@types/navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hook/useAuth";

interface ApiResponse {
  // id: number;
  razaoSocial: string;
  endereco: string;
  cnpj: string;
  email: string;
  tipo: string;
}

type InstituicaoProps = NativeStackScreenProps<PropsStack, "Instituicao">;

export const Instituicao: React.FC<InstituicaoProps> = ({
  route,
  navigation,
}) => {
  const idInstituicao = route.params.id;
  console.log(idInstituicao);
  const [response, setResponse] = useState<ApiResponse>();
  const [loading, setLoading] = useState<boolean>(true);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [formData, setFormData] = useState<ApiResponse>({
    // id: idInstituicao,
    razaoSocial: "",
    endereco: "",
    cnpj: "",
    email: "",
    tipo: "",
  });
  const { role } = useAuth();

  useEffect(() => {
    if (idInstituicao) {
      getDataById(idInstituicao);
    }
  }, [idInstituicao]);

  const url = `http://192.168.1.65:8080/instituicao/id/${idInstituicao}`;

  const getDataById = async (id: number) => {
    try {
      setLoading(true);
      const result = await axios.get(
        `http://192.168.1.65:8080/instituicao/id/${id}`
      );
      setResponse(result.data);
      setFormData(result.data);
    } catch (error) {
      console.log("Erro ao buscar dados");
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigation();

  const handleUpdate = async () => {
    try {
      setLoading(true);
      console.log("Enviando dados:", formData);
      await axios.put(
        `http://192.168.1.65:8080/instituicao/id/${idInstituicao}`,
        formData
      );
      console.log(idInstituicao);
      alert("Instituição atualizada com sucesso!");
      setEditMode(false);
      getDataById(idInstituicao);
    } catch (error) {
      console.log("Erro ao atualizar dados");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (name: keyof ApiResponse, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.containerHeader}>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => navigate.navigate("Busca")}
        >
          <Icon name="arrow-left" size={24} color="#176B87" />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {loading ? (
          <Text>Carregando...</Text>
        ) : response ? (
          <>
            <CardInstituicao
              razaoSocial={response.razaoSocial}
              endereco={response.endereco}
              cnpj={response.cnpj}
              email={response.email}
              tipo={response.tipo}
            />

            {!editMode && role === "ADMIN" && (
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => setEditMode(true)}
              >
                <Text style={styles.editButtonText}>EDITAR INSTITUIÇÃO</Text>
              </TouchableOpacity>
            )}

            {editMode && (
              <View style={styles.formContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Razão Social"
                  value={formData.razaoSocial}
                  onChangeText={(text) => handleChange("razaoSocial", text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Endereço"
                  value={formData.endereco}
                  onChangeText={(text) => handleChange("endereco", text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="CNPJ"
                  value={formData.cnpj}
                  onChangeText={(text) => handleChange("cnpj", text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  value={formData.email}
                  onChangeText={(text) => handleChange("email", text)}
                />

                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={handleUpdate}
                >
                  <Text style={styles.saveButtonText}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setEditMode(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        ) : (
          <Text style={{ color: "pink", fontSize: 30 }}>
            Instituição não encontrada
          </Text>
        )}
      </View>
    </View>
  );
};
