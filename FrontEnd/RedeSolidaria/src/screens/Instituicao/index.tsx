import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View, Text } from "react-native";
import axios from "axios";
import { CardInstituicao } from "../../components/CardInstituicao";
import { SearchBar } from "../../components/SearchBar";
import { styles } from "./style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsStack } from "../../@types/navigation";

interface ApiResponse {
  id: string;
  razaoSocial: string;
  endereco: string;
  cnpj: string;
  email: string;
}

// type BuscaProps = NativeStackScreenProps<PropsStack, "StackInstituicao">;
type InstituicaoProps = NativeStackScreenProps<PropsStack, "Instituicao">;

// export const Instituicao = ({ route }: any) => {
  export const Instituicao: React.FC<InstituicaoProps> = ({ route }) => {
  const idInstituicao = route.params.id;
  console.log(idInstituicao);
  const [response, setResponse] = useState<ApiResponse>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (idInstituicao) {
      getDataById(idInstituicao);
    }
  }, [idInstituicao]);

  const url = `http://192.168.0.108:8080/instituicao/id/${idInstituicao}`;

  const getDataById = async (id: number) => {
    try {
      setLoading(true);
      const result = await axios.get(
        `http://192.168.0.108:8080/instituicao/id/${id}`
      );
      setResponse(result.data);
    } catch (error) {
      console.log("Erro ao buscar dados");
    } finally {
      setLoading(false);
    }
  };

  return (
    // <SafeAreaView style={styles.container}>
    //   <View style={styles.searchBarContainer}>
    //     <SearchBar />
    //   </View>
    //   <FlatList
    //     data={response}
    //     keyExtractor={(item) => item.id}
    //     renderItem={({ item }) => (
    //       <View style={styles.cardContainer } key={item.id}>
    //         {/* <Card
    //             razaoSocial={item.razaoSocial}
    //             endereco={item.endereco}
    //             cnpj={item.cnpj}
    //             email={item.email}
    //           /> */}
    //       </View>
    //     )}
    //   />
    // </SafeAreaView>
    
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {loading ? (
        <Text>Carregando...</Text>
      ) : response ? (
        <CardInstituicao
          razaoSocial={response.razaoSocial}
          endereco={response.endereco}
          cnpj={response.cnpj}
          email={response.email}
        />
      ) : (
        <Text style={{ color: "pink", fontSize: 30 }}>Instituição não encontrada</Text>
      )}
    </View>
);
};


//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text style={{ color: "pink", fontSize: 30 }}>
//         {response? response.razaoSocial : "nao veio"}
//       </Text>
//     </View>
//   );
// };
