import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Keyboard,
  Platform,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import styles from "./styles";

import { register } from "../../../redux/auth/slice";

const initialFormData = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation }) {
  const [formData, setFormData] = useState(initialFormData);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isPassShown, setIsPassShown] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () =>
      setIsKeyboardShown(false)
    );

    return () => {
      hideSubscription.remove();
    };
  }, []);

  function resetForm() {
    setFormData(initialFormData);
  }

  function hideKeyboard() {
    Keyboard.dismiss();
    setIsKeyboardShown(false);
  }

  function handleSubmit() {
    console.log(formData);
    resetForm();
    hideKeyboard();
    dispatch(register());
  }

  function handleFocus() {
    setIsKeyboardShown(true);
  }

  function togglePassHiding() {
    setIsPassShown((prev) => !prev);
  }

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <ImageBackground
        source={require("../../../assets/Images/BG/Landscape.jpg")}
        style={styles.bg}
        resizeMode="cover"
      >
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
          <View
            style={{
              ...styles.container,
              paddingBottom: isKeyboardShown ? 10 : 78,
            }}
          >
            <View style={styles.avatarContainer}>
              <TouchableOpacity style={styles.addImageBtn} activeOpacity={0.7}>
                <Image
                  style={styles.addBtnIcon}
                  source={require("../../../assets/Images/Icons/addBtnIcon.png")}
                />
              </TouchableOpacity>
              <Image
                style={styles.avatar}
                source={require("../../../assets/Images/noPhoto.jpg")}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.title}>Регистрация</Text>
            <View style={styles.form}>
              <TextInput
                style={{
                  ...styles.input,
                  marginTop: 0,
                }}
                placeholder="Логин"
                value={formData.login}
                onFocus={handleFocus}
                onChangeText={(data) =>
                  setFormData((prevData) => ({ ...prevData, login: data }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Адрес электронной почты"
                keyboardType="email-address"
                value={formData.email}
                onFocus={handleFocus}
                onChangeText={(data) =>
                  setFormData((prevData) => ({ ...prevData, email: data }))
                }
              />
              <View style={styles.passIputContainer}>
                <TextInput
                  style={{ ...styles.input, marginTop: 0 }}
                  placeholder="Пароль"
                  secureTextEntry={!isPassShown}
                  value={formData.password}
                  onFocus={handleFocus}
                  onChangeText={(data) =>
                    setFormData((prevData) => ({ ...prevData, password: data }))
                  }
                />
                <TouchableOpacity
                  style={styles.showPassBtn}
                  activeOpacity={0.6}
                  onPress={togglePassHiding}
                >
                  <Text style={styles.passBtnLabel}>
                    {isPassShown ? "Скрыть" : "Показать"}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.submitBtn}
                activeOpacity={0.8}
                onPress={handleSubmit}
              >
                <Text style={styles.submitBtnLabel}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <View
                style={{
                  ...styles.loginOfferContainer,
                  marginBottom: isKeyboardShown ? -110 : 0,
                }}
              >
                <Text style={styles.loginOfferText}>Уже есть аккаунт?</Text>
                <TouchableOpacity
                  style={styles.loginOfferBtn}
                  activeOpacity={0.6}
                  onPress={() => navigation.navigate("login")}
                >
                  <Text style={styles.loginOfferBtnLabel}>Войти.</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
