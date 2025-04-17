// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//@ts-ignore
import {getAuth, initializeAuth, getReactNativePersistence} from "firebase/auth"
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPw_pEE3BhajUuVv8A_RiRspZgf24bkrQ",
  authDomain: "college-campus-guru-94de1.firebaseapp.com",
  projectId: "college-campus-guru-94de1",
  storageBucket: "college-campus-guru-94de1.firebasestorage.app",
  messagingSenderId: "1047191435113",
  appId: "1:1047191435113:web:0ab2137b26a829814daff8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})