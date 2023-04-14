import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDQDML2C-PLxhmsaSOHX11xQzwsGhbyJm0",
  authDomain: "interativo-c4766.firebaseapp.com",
  projectId: "interativo-c4766",
  storageBucket: "interativo-c4766.appspot.com",
  messagingSenderId: "592330554672",
  appId: "1:592330554672:web:7c8ba2f8f7b816bd2a5cf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();