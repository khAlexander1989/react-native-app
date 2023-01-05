import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flex: 1,
    justifyContent: "flex-end",
  },
  postImage: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  commentsContainer: {
    marginTop: 32,
  },
  commentContaier: {
    flexDirection: "row",
  },
  comment: {
    flex: 1,
    borderRadius: 8,
    marginBottom: 24,
    marginLeft: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  avatarLabel: {
    position: "absolute",
    fontWeight: "bold",
    color: "#FF6C00",
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#000000",
  },
  commentText: {
    padding: 16,
    fontSize: 13,
    lineHeight: 18,
  },

  inputContainer: { marginBottom: 16 },
  input: {
    height: 50,
    paddingLeft: 16,
    backgroundColor: "#E8E8E8",
    borderWidth: 1,
    borderColor: "#D5D5D5",
    borderRadius: 100,
  },
  sendCommentBtn: {
    position: "absolute",
    zIndex: 1,
    right: 8,
    bottom: "50%",
    transform: [{ translateY: 17 }],
    justifyContent: "center",
    alignItems: "center",
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#FF6C00",
  },
});

export default styles;
