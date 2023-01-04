import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegistrationScreen from "../RegistrationScreen/RegistrationScreen";
import LoginScreen from "../LoginScreen/LoginScreen";

const authStack = createNativeStackNavigator();

export default function Auth() {
  return (
    <authStack.Navigator>
      <authStack.Group screenOptions={{ headerShown: false }}>
        <authStack.Screen name="login" component={LoginScreen} />
        <authStack.Screen name="registration" component={RegistrationScreen} />
      </authStack.Group>
    </authStack.Navigator>
  );
}
