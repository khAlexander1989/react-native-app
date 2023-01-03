import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  postContainer: {
    width: "100%",
    marginBottom: 32,
  },
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
