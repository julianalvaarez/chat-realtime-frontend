// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwpR4keFUhafuHrndGVsNkptjjOGNKR8E",
  authDomain: "chat-realtime-e60f2.firebaseapp.com",
  projectId: "chat-realtime-e60f2",
  storageBucket: "chat-realtime-e60f2.appspot.com",
  messagingSenderId: "218279237324",
  appId: "1:218279237324:web:93e9f1d38bdbc1c1651469"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);