import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";
import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import LocationIcon from "../../../assets/Icons/location-input-icon.svg";
import CommentsIcon from "../../../assets/Icons/comments-icon.svg";

import { db } from "../../../firebase/config";
import { selectUserData } from "../../../redux/auth/selectors";
import styles from "./styles";

export default function ProfileScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const { userId } = useSelector(selectUserData);

  const getPosts = async () => {
    onSnapshot(collection(db, "posts"), (data) =>
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  const filteredPosts = posts.filter((post) => post.userId === userId);

  console.log(filteredPosts);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/Images/BG/Landscape.jpg")}
        style={styles.bg}
        resizeMode="cover"
      >
        <View style={styles.profileDataContainer}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={require("../../../assets/Images/noPhoto.jpg")}
              resizeMode="cover"
            />
          </View>
          <FlatList
            style={styles.postsContainer}
            data={filteredPosts}
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
      </ImageBackground>
    </View>
  );
}
