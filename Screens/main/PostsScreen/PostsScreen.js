import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DefaultScreen from "../../nested/DefaultScreen";
import CommentsScreen from "../../nested/CommentsScreen";
import MapScreen from "../../nested/MapScreen";

const Stack = createNativeStackNavigator();

export default function PostsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="default"
        component={DefaultScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="comments" component={CommentsScreen} />
      <Stack.Screen name="map" component={MapScreen} />
    </Stack.Navigator>
  );
}
