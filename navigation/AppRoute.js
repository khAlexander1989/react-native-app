import { useSelector } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";

import { selectIsLoggedIn } from "../redux/auth/selectors";
import Home from "../Screens/main/Home";
import Auth from "../Screens/auth/Auth";

function AppRoute() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log("isLoggedIn", isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <Home /> : <Auth />}
    </NavigationContainer>
  );
}

export default AppRoute;
