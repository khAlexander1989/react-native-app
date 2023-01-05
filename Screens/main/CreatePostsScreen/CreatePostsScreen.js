import { nanoid } from "nanoid";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { Camera } from "expo-camera";
import { useIsFocused } from "@react-navigation/core";
import * as Loacation from "expo-location";

import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import SnapBtnIcon from "../../../assets/Icons/snapBtnIcon.svg";
import LocationIcon from "../../../assets/Icons/location-input-icon.svg";

import { db, storage } from "../../../firebase/config";

import { selectUserData } from "../../../redux/auth/selectors";

import styles from "./styles";

const initialPostData = {
  photo: null,
  name: null,
  place: null,
};

export default function CreatePostsScreen({ navigation }) {
  const [camera, setCamera] = useState(null);
  const [postData, setPostData] = useState(initialPostData);
  const [isUploading, setIsUploading] = useState(false);
  const { userId, userName } = useSelector(selectUserData);

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
      setPostData((prevData) => ({ ...prevData, photo: photo.uri }));
    } catch (err) {
      console.log(err.message);
    }
  }

  async function uploadPhotoToServer() {
    try {
      const res = await fetch(postData.photo);
      const file = await res.blob();

      const postId = nanoid();
      const photoRef = ref(storage, `postImages/${postId}`);

      await uploadBytes(photoRef, file);

      const photUri = await getDownloadURL(photoRef);
      console.log("pthotUri", photUri);
      return photUri;
    } catch (err) {
      console.log(err.message);
      console.log(err.code);
    }
  }

  async function uploadPostToServer() {
    try {
      const photo = await uploadPhotoToServer();
      const { coords } = await Loacation.getCurrentPositionAsync();
      const { name, place } = postData;

      const post = {
        userId,
        userName,
        photo,
        name,
        place,
        location: coords,
      };
      console.log("post data: ", post);

      const docsRef = await addDoc(collection(db, "posts"), post);

      console.log(docsRef);
    } catch (err) {
      console.log(err);
    }
  }

  async function publishPost() {
    setIsUploading(true);
    await uploadPostToServer();
    setIsUploading(false);
    navigation.navigate("default");
    resetPostData();
  }

  useEffect(() => {
    (async function () {
      const { status } = await Loacation.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
    (async function () {
      const { status } = await Camera.requestCameraPermissionsAsync();

      if (status !== "granted") {
        console.log("Permission to access camera was denied");
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
          backgroundColor:
            isPostDataExist && !isUploading ? "#FF6C00" : "#E1E1E1",
        }}
        activeOpacity={0.7}
        onPress={publishPost}
        disabled={!isPostDataExist || isUploading}
      >
        <Text
          style={{
            ...styles.publishBtnLabel,
            color: isPostDataExist && !isUploading ? "#ffffff" : "#ACACAC",
          }}
        >
          Опубликовать
        </Text>
      </TouchableOpacity>
    </View>
  );
}
