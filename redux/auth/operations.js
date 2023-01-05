import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  signOut,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "@firebase/auth";

import { auth } from "../../firebase/config";

export const register = createAsyncThunk(
  "auth/register",
  async ({ login, email, password, thunkAPI }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: login });

      const { uid, displayName } = auth.currentUser;

      return {
        uid,
        displayName,
      };
    } catch (err) {
      console.log("Error");
      console.log(err.message);
    }
  }
);
export const logIn = createAsyncThunk(
  "auth/logIn",
  async ({ email, password }, thunkAPI) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      const { displayName, uid } = auth.currentUser;

      return { uid, displayName };
    } catch (err) {
      console.log(err.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await signOut(auth);
    return;
  } catch (err) {
    console.log(err.message);
  }
});

export const refresh = createAsyncThunk(
  "auth/refresh",
  async ({ uid, displayName }, thunkAPI) => {
    return { uid, displayName };
  }
);
