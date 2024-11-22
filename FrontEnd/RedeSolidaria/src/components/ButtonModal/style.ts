import { Dimensions, StyleSheet, Platform } from "react-native";
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  styleButton: {
    width: 60,
    height: Platform.OS === 'android' ? 60 : 100,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5
  },

  text: {
    color: "#fff",
    fontSize: width < 767 ? 20 : 50,
    fontWeight: "bold",
  },
  icon:{
    marginTop:25,
    alignItems:'center',
    justifyContent:'center'
  }
});
