import { useState } from "react";
import {
  View,
  Text,
  Keyboard,
  Platform,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

const initialFormData = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  function resetForm() {
    setFormData(initialFormData);
  }

  function handleSubmit() {
    console.log(formData);
    resetForm();
    Keyboard.dismiss();
    setIsKeyboardShown(false);
  }

  function handleFocus() {
    setIsKeyboardShown(true);
  }

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={[styles.input, styles.firstInput]}
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
        value={formData.email}
        onChangeText={(data) =>
          setFormData((prevData) => ({ ...prevData, email: data }))
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        secureTextEntry
        value={formData.password}
        onChangeText={(data) =>
          setFormData((prevData) => ({ ...prevData, password: data }))
        }
      />
      <TouchableOpacity
        style={styles.submitBtn}
        activeOpacity={0.8}
        onPress={handleSubmit}
      >
        <Text style={styles.submitBtnLabel}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 32,
    marginHorizontal: 16,
  },
  input: {
    paddingHorizontal: 16,
    marginTop: 16,
    height: 50,

    color: "black",
    backgroundColor: "#F6F6F6",

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  firstInput: {
    marginTop: 0,
  },
  submitBtn: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  submitBtnLabel: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    color: "#ffffff",
  },
});
