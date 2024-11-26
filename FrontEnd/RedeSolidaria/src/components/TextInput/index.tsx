import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./style";
import { View } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";

interface PropsInput {
  placeHolder?: string;
  typeInput?: boolean;
  valueInput?: string;
  hadleFunctionInput?: (value: string) => void;
  typeIcon?: string;
}

export const TextInputField = ({
  placeHolder,
  typeInput,
  valueInput,
  hadleFunctionInput,
  typeIcon,
}: PropsInput) => {
  const [viewPassword, setViewPassword] = useState<boolean>(false);

  return (
    <KeyboardAvoidingView
      style={styles.boxInput}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            onChangeText={hadleFunctionInput}
            style={styles.input}
            placeholder={placeHolder}
            placeholderTextColor="#000"
            secureTextEntry={typeIcon === "password" && !viewPassword}
            value={valueInput}
          />
          <TouchableOpacity
            style={styles.boxIcon}
            onPress={() =>
              typeIcon === "password" && setViewPassword(!viewPassword)
            }
          >
            {typeIcon === "mail" && <Icon name="mail" size={24} color="#000" />}
            {typeIcon === "person" && (
              <Icon name="user" size={24} color="#000" />
            )}
            {typeIcon === "password" &&
              (viewPassword ? (
                <Icon name="eye" size={24} color="#000" />
              ) : (
                <Icon name="eye-off" size={24} color="#000" />
              ))}
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
