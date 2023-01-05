import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
  },
  profileDataContainer: {
    flex: 1,
    marginTop: 150,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
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

  postsContainer: {
    paddingVertical: 16,
    marginTop: 160,
    marginBottom: 32,
    marginHorizontal: 16,
  },
  postContainer: { marginBottom: 32 },

  postImage: {
    height: 240,
    width: "100%",

    borderRadius: 8,
  },
  postName: {
    fontSize: 16,
  },
  postInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  postLocation: {
    flexDirection: "row",
  },
  postLocationText: {
    fontSize: 16,
    color: "#212121",
  },
  postComments: { flexDirection: "row" },
  PostCommentsCount: {
    fontSize: 16,
    color: "#BDBDBD",
  },
});

export default styles;
