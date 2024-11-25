import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import { Picker } from "@react-native-picker/picker";

interface PickerProps {
  onValueChange: (value: string) => void;
  selectValue: string;
}

export const PickerTipo = ({ onValueChange, selectValue }: PickerProps) => {
  return (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectValue}
        onValueChange={() => onValueChange}
        style={styles.picker}
      >
        <Picker.Item label="Selecione o tipo de instituição" value="" />
        <Picker.Item label="PRIVADA" value="PRIVADA" />
        <Picker.Item label="PUBLICA" value="PUBLICA" />
        <Picker.Item label="ONGS" value="ONGS" />
      </Picker>
      {selectValue ? (
        <Text style={styles.result}>Você selecionou: {selectValue}</Text>
      ) : null}
    </View>
  );
};
