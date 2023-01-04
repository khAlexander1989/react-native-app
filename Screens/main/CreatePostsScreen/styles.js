import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginHorizontal: 16,
  },
  camera: {
    height: 240,
    marginTop: 32,
    // marginHorizontal: 16,
    // justifyContent: "center",
    // alignItems: "center",

    borderRadius: 8,
  },
  photoContainer: {
    height: 240,
    marginTop: 32,
    // marginHorizontal: 16,
    // flex: 1,
    // width: "100%",
    // backgroundColor: "black",
  },
  photo: {
    flex: 1,
    width: "100%",
  },
  snapBtn: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    zIndex: 10,

    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  inputContainer: {
    height: 50,
    paddingLeft: 28,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  input: { height: "100%" },
  locationIcon: {
    position: "absolute",
    left: 0,
    bottom: "50%",
    transform: [{ translateY: 12 }],
  },
  publishBtn: {
    height: 50,
    borderRadius: 100,
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  publishBtnLabel: {
    fontSize: 16,
  },
});

export default styles;
