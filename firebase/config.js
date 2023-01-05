import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJGaKiYWe9Rxmq86BmpN6gxflBc38qEwQ",
  authDomain: "rn-social-da682.firebaseapp.com",
  projectId: "rn-social-da682",
  storageBucket: "rn-social-da682.appspot.com",
  messagingSenderId: "801988177275",
  appId: "1:801988177275:web:ae9ec9637b7bb06e3621de",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
