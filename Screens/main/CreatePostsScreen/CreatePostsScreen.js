import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { Camera } from "expo-camera";
import { useIsFocused } from "@react-navigation/core";
import * as Loacation from "expo-location";

import SnapBtnIcon from "../../../assets/Icons/snapBtnIcon.svg";
import LocationIcon from "../../../assets/Icons/location-input-icon.svg";

import styles from "./styles";

const initialPostData = {
  photo: null,
  name: null,
  place: null,
  location: null,
};

export default function CreatePostsScreen({ navigation }) {
  const [camera, setCamera] = useState(null);
  const [postData, setPostData] = useState(initialPostData);

  const isFocused = useIsFocused();

  function resetPhoto() {
    setPostData((prevData) => ({ ...prevData, photo: null }));
  }

  function resetPostData() {
    setPostData(initialPostData);
  }

  async function takePhoto() {
    if (postData.photo) {
      resetPhoto();
      return;
    }
    try {
      const photo = await camera.takePictureAsync();
      const location = await Loacation.getCurrentPositionAsync();
      setPostData((prevData) => ({ ...prevData, location }));
      setPostData((prevData) => ({ ...prevData, photo: photo.uri }));
    } catch (err) {
      console.log(err.message);
    }
  }

  function publishPost() {
    navigation.navigate("default", { postData });
    resetPostData();
  }

  useEffect(() => {
    (async function () {
      const { status } = await Loacation.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  }, []);

  const { photo, name, place } = postData;

  const isPostDataExist = photo && name && place;

  return (
    <View style={styles.container}>
      {!postData.photo && isFocused ? (
        <Camera style={styles.camera} ref={(ref) => setCamera(ref)}>
          <TouchableOpacity
            style={styles.snapBtn}
            onPress={takePhoto}
            activeOpacity={0.3}
          >
            <SnapBtnIcon width={24} height={24} fill="white" />
          </TouchableOpacity>
        </Camera>
      ) : (
        <View style={styles.photoContainer}>
          <TouchableOpacity
            style={styles.snapBtn}
            onPress={takePhoto}
            activeOpacity={0.3}
          >
            <SnapBtnIcon width={24} height={24} fill="white" />
          </TouchableOpacity>
          <Image
            source={{ uri: postData.photo }}
            style={styles.photo}
            resizeMode="cover"
          />
        </View>
      )}

      <View style={{ ...styles.inputContainer, marginTop: 55 }}>
        <TextInput
          style={styles.input}
          placeholder="Название..."
          value={postData.name}
          onChangeText={(data) =>
            setPostData((prevData) => ({ ...prevData, name: data }))
          }
        />
      </View>
      <View style={{ ...styles.inputContainer, marginTop: 20 }}>
        <LocationIcon size={24} style={styles.locationIcon} />
        <TextInput
          style={styles.input}
          placeholder="Местность..."
          value={postData.place}
          onChangeText={(data) =>
            setPostData((prevData) => ({ ...prevData, place: data }))
          }
        />
      </View>

      <TouchableOpacity
        style={{
          ...styles.publishBtn,
          backgroundColor: isPostDataExist ? "#FF6C00" : "#E1E1E1",
        }}
        activeOpacity={0.7}
        onPress={publishPost}
        disabled={!isPostDataExist}
      >
        <Text
          style={{
            ...styles.publishBtnLabel,
            color: isPostDataExist ? "#ffffff" : "#ACACAC",
          }}
        >
          Опубликовать
        </Text>
      </TouchableOpacity>
    </View>
  );
}
