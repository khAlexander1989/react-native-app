import { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

import LocationIcon from "../../../assets/Icons/location-input-icon.svg";
import CommentsIcon from "../../../assets/Icons/comments-icon.svg";

export default function PostsScreen({ route, navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevPosts) => [...prevPosts, route.params.postData]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => {
          console.log("name: ", item.name);

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
                  onPress={() => navigation.navigate("comments")}
                >
                  <CommentsIcon size={24} />
                  <Text style={styles.PostCommentsCount}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.postLocation}
                  onPress={() =>
                    navigation.navigate("map", {
                      coords: item.location.coords,
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
