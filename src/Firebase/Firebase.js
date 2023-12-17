import { initializeApp } from "firebase/app";
import { getAuth ,onAuthStateChanged, signOut, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore , setDoc,doc} from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyDUpmcKH4VHlPweNX8MLOwJgNwMH7OjWjY",
    authDomain: "react-native-dd90f.firebaseapp.com",
    projectId: "react-native-dd90f",
    storageBucket: "react-native-dd90f.appspot.com",
    messagingSenderId: "603782203691",
    appId: "1:603782203691:web:15d957d7a24c4d48dd1d6e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});



export {auth,onAuthStateChanged, signOut,createUserWithEmailAndPassword,doc,setDoc,signInWithEmailAndPassword }