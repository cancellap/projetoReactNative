import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius: 20,
  },
  boxMid: {
    height: 340,
    width: "100%",
    paddingHorizontal: 37,
    alignItems: "center",
  },
  boxBottom: {
    flexDirection: "row",
    height: 200,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    marginLeft: 5,
    color: "#999",
    fontSize: 18,
    marginTop: 10,
  },
  modal: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
});
