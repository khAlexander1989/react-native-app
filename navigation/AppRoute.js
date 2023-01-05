import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";

import { selectIsLoggedIn } from "../redux/auth/selectors";
import Home from "../Screens/main/Home";
import Auth from "../Screens/auth/Auth";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase/config";

import { refresh } from "../redux/auth/operations";

function AppRoute() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName } = user;

        dispatch(refresh({ uid, displayName }));
      }
    });
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <Home /> : <Auth />}
    </NavigationContainer>
  );
}

export default AppRoute;
