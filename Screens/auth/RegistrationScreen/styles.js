import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 92,
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
  },
  bg: {
    flex: 1,
    justifyContent: "flex-end",
  },
  avatarContainer: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    width: 100,
    height: 100,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  addImageBtn: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 0,
    bottom: 14,
    transform: [{ translateX: 12 }],
    zIndex: 1,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FF6C00",
    color: "#FF6C00",
  },
  addBtnIcon: {
    width: "60%",
    height: "60%",
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",

    color: "#212121",
  },
  form: {
    marginTop: 32,
    marginHorizontal: 16,
  },
  passIputContainer: {
    position: "relative",
    marginTop: 16,
  },
  input: {
    paddingHorizontal: 16,
    marginTop: 16,
    height: 50,

    color: "#000000",
    backgroundColor: "#F6F6F6",

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  showPassBtn: {
    position: "absolute",
    bottom: 0,
    right: 16,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  passBtnLabel: {
    color: "#1B4371",
  },
  submitBtn: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  submitBtnLabel: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    color: "#ffffff",
  },
  loginOfferContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  loginOfferText: {},
  loginOfferBtn: {},
  loginOfferBtnLabel: {
    color: "#1B4371",
    marginLeft: 5,
    textDecorationLine: "underline",
  },
});

export default styles;
