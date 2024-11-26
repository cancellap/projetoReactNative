import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  boxForms: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#B4D4FF",
    padding: 23,
    borderRadius: 20
  },
  ButtonLogin: {
    marginTop: 20,
    backgroundColor: "#176B87",
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  msg: {
    fontSize: 14,
    color: "red",
    marginTop: 20,
    textAlign: "center",
  },
  ButtonCadastro: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#176B87",
    borderRadius: 8,
    alignItems: "center",
  },
  TextCadastro: {
    color: "#EEF5FF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
