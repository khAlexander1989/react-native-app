import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

import BtnIcon from "../../../assets/Icons/btn-arrow.svg";
import { db } from "../../../firebase/config";
import { selectUserData } from "../../../redux/auth/selectors";
import { getRandomHexColor } from "../../../utils/getRandomColor";

import styles from "./styles";

export default function CommentsScreen({ route }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { postId, photo } = route.params;
  const { userName, userId } = useSelector(selectUserData);

  async function createComment() {
    await addDoc(collection(db, `posts/${postId}/comments`), {
      comment,
      commentOwnerName: userName,
      commentOwnerId: userId,
    });
    console.log(`comment for post ${postId}  was created`);
  }

  async function leaveComment() {
    await createComment();
    setComment("");
  }

  async function getComments() {
    console.log(db);
    console.log("get comments with ", postId);
    onSnapshot(collection(db, `posts/${postId}/comments`), (data) =>
      setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  }

  useEffect(() => {
    getComments();
  }, []);

  console.log("comments: ", comments);
  console.log("uri", photo);

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.postImage} />
      <FlatList
        style={styles.commentsContainer}
        data={comments}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <View style={styles.commentContaier}>
              <View
                style={{
                  ...styles.avatar,
                }}
              >
                <Text style={styles.avatarLabel}>
                  {item.commentOwnerName.slice(0, 2)}
                </Text>
              </View>
              <View style={styles.comment}>
                <Text style={styles.commentText}>{item.comment}</Text>
              </View>
            </View>
          );
        }}
      />
      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.sendCommentBtn}
          activeOpacity={0.7}
          onPress={leaveComment}
        >
          <BtnIcon />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Комментировать..."
          onChangeText={(data) => setComment(data)}
          value={comment}
        />
      </View>
    </View>
  );
}
