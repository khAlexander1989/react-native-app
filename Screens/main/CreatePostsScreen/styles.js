import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "flex-start",
  },
  camera: {
    height: 240,
    marginTop: 32,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 8,
  },
  snapBtn: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
});

export default styles;
