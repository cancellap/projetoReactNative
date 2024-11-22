import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import Icon from 'react-native-vector-icons/FontAwesome';

type PropsButton = {
  title?: string | number;
  propsBackgroundColor?: string;
  handleFunction: () => void;
}

export const ButtonModal = ({title, propsBackgroundColor, handleFunction}: PropsButton) => {

  return (
    <TouchableOpacity
      onPress={handleFunction}
      activeOpacity={0.2}
      style={[styles.styleButton, 
        {
          backgroundColor: propsBackgroundColor ? propsBackgroundColor : "#000"
        }
      ]}
    >
      <Icon name="plus" size={20} color="#fff" style={styles.icon} />
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
