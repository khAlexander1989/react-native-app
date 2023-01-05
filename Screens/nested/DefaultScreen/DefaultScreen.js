import { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { collection, onSnapshot } from "firebase/firestore";

import styles from "./styles";

import LocationIcon from "../../../assets/Icons/location-input-icon.svg";
import CommentsIcon from "../../../assets/Icons/comments-icon.svg";
import { db } from "../../../firebase/config";

export default function PostsScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    onSnapshot(collection(db, "posts"), (data) =>
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.postContainer}>
              <Image
                style={styles.postImage}
                source={{ uri: item.photo }}
                resizeMode="cover"
              />
              <Text style={styles.postName}>{item.name}</Text>
              <View style={styles.postInfoContainer}>
                <TouchableOpacity
                  style={styles.postComments}
                  onPress={() =>
                    navigation.navigate("comments", {
                      postId: item.id,
                      photo: item.photo,
                    })
                  }
                >
                  <CommentsIcon size={24} />
                  <Text style={styles.PostCommentsCount}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.postLocation}
                  onPress={() =>
                    navigation.navigate("map", {
                      coords: item.location,
                      place: item.place,
                    })
                  }
                >
                  <LocationIcon size={24} />
                  <Text style={styles.postLocationText}>{item.place}</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
