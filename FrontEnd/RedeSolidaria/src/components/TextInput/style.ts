import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  boxInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    height: 50,
    width: "90%",
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingVertical: Platform.OS === "ios" ? 10 : 5,
  },
  boxIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  iconButton: {
    padding: 8,
  },
});
