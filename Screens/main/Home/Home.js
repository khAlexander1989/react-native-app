import { useDispatch } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";

import LogoutIcon from "../../../assets/Icons/log-out.svg";
import PostsIcon from "../../../assets/Icons/posts.svg";
import CreatePostsIcon from "../../../assets/Icons/create-post.svg";
import ProfileIcon from "../../../assets/Icons/profile.svg";

import PostsScreen from "../PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen";
import ProfileScreen from "../ProfileScreen";
import { logout } from "../../../redux/auth/slice";

const MainTab = createBottomTabNavigator();

export default function Home() {
  const dispatch = useDispatch();

  return (
    <MainTab.Navigator
      initialRouteName="posts"
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <MainTab.Group
        screenOptions={{
          headerTitleAlign: "center",
          showLabel: false,
        }}
      >
        <MainTab.Screen
          name="posts"
          component={PostsScreen}
          options={{
            title: "Публикации",
            tabBarActiveTintColor: "#FF6C00",
            tabBarInactiveTintColor: "#212121",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => dispatch(logout())}
                style={{
                  width: 24,
                  height: 24,
                  marginRight: 16,
                }}
                activeOpacity={0.5}
              >
                <LogoutIcon width="100%" height="100%" />
              </TouchableOpacity>
            ),
            tabBarIcon: ({ color, size }) => (
              <PostsIcon size={size} stroke={color} />
            ),
          }}
        />
        <MainTab.Screen
          name="create"
          component={CreatePostsScreen}
          options={{
            title: "Создать публикацию",
            tabBarIcon: ({ focused, size }) =>
              focused ? (
                <CreatePostsIcon
                  size={size}
                  fill={"#FF6C00"}
                  stroke={"#ffffff"}
                />
              ) : (
                <CreatePostsIcon
                  size={size}
                  fill={"#ffffff"}
                  stroke={"#212121"}
                />
              ),
          }}
        />
        <MainTab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarActiveTintColor: "#FF6C00",
            tabBarInactiveTintColor: "#212121",

            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <ProfileIcon size={size} stroke={color} />;
            },
          }}
        />
      </MainTab.Group>
    </MainTab.Navigator>
  );
}
