// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT8NkYMfE6oD-As9kAUn_N_tKDDOLZdx0",
  authDomain: "mernfoodstarting.firebaseapp.com",
  projectId: "mernfoodstarting",
  storageBucket: "mernfoodstarting.appspot.com",
  messagingSenderId: "1075885789513",
  appId: "1:1075885789513:web:b557adace1afeb52bc8a98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app