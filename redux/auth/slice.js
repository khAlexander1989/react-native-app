import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refresh } from "./operations";

const initialState = {
  userId: null,
  userName: null,
  isLoggedIn: false,
};

authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.userId = payload.uid;
        state.userName = payload.displayName;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.userId = payload.uid;
        state.userName = payload.displayName;
      })
      .addCase(logOut.fulfilled, () => initialState)
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.userId = payload.uid;
        state.userName = payload.displayName;
      }),
});

export default authSlice.reducer;
