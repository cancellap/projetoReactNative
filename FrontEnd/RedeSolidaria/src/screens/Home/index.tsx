import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "./style";
import { useAuth } from "../../hook/useAuth";

export const Home = () => {
  const { token } = useAuth();

  return (
    // <View style={styles.container}>
    //   <View style={styles.header}>
    //     <Text style={styles.headerText}>Meu Perfil</Text>
    //     <Icon name="user" type="font-awesome" size={30} color="white" />
    //   </View>

    //   <View style={styles.body}>
    //     <Text style={styles.title}>Minha Saúde</Text>

    //     <View style={styles.grid}>
    //       {[
    //         { title: "Vacinas", nomeIcone: "syringe" },
    //         { title: "Exames", nomeIcone: "clipboard-check" },
    //         { title: "Medicamentos", nomeIcone: "pills" },
    //         { title: "Dignidade Menstrual", nomeIcone: "female" },
    //         { title: "Rede de Saúde", nomeIcone: "hospital" },
    //         { title: "Agendamentos", nomeIcone: "calendar-alt" },
    //         { title: "Atendimentos", nomeIcone: "file-medical" },
    //         { title: "Contatos", nomeIcone: "phone-alt" },
    //         { title: "Alergias", nomeIcone: "allergies" },
    //         { title: "Calendário", nomeIcone: "calendar-week" },
    //         { title: "Checklist", nomeIcone: "clipboard-list" },
    //       ].map((item, index) => (
    //         <GridButton
    //           key={index}
    //           title={item.title}
    //           nomeIcone={item.nomeIcone}
    //         />
    //       ))}
    //     </View>
    //   </View>
    // </View>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => {
          console.log(token);
        }}
      >
        <Text>teste</Text>
      </TouchableOpacity>
    </View>
  );
};
