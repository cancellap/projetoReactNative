import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
    backgroundColor: "#176B87",

  },
  container: {
    marginTop: StatusBar.currentHeight + 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEF5FF",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    marginLeft: 15,
    marginRight: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
