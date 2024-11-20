import React from "react";
import { View, TextInput, SafeAreaView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (text: string) => void;
  value?: string;
};

export const SearchBar = ({
  placeholder = "Buscar...",
  onSearch,
  value,
}: SearchBarProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FontAwesome
          name="search"
          size={20}
          color="#176B87"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onSearch}
        />
      </View>
    </SafeAreaView>
  );
};
