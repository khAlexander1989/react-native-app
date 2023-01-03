import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import AppRoute from "./navigation/AppRoute";

export default function App() {
  return (
    <Provider store={store}>
      <AppRoute />
      <StatusBar style="auto" />
    </Provider>
  );
}
