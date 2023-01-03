import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

import SnapBtnIcon from "../../../assets/Icons/snapBtnIcon.svg";

import styles from "./styles";

export default function CreatePostsScreen() {
  const [camera, setCamera] = useState(null);

  async function takePhoto() {
    try {
      const photo = await camera.takePictureAsync();
      console.log(photo.uri);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        <TouchableOpacity
          style={styles.snapBtn}
          onPress={takePhoto}
          activeOpacity={0.3}
        >
          <SnapBtnIcon width={24} height={24} fill="white" />
        </TouchableOpacity>
      </Camera>
      <Text>CreatePostsScreen</Text>
    </View>
  );
}
