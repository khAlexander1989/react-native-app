import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },

    logout(state) {
      state.isLoggedIn = false;
    },

    register(state) {
      state.isLoggedIn = true;
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
