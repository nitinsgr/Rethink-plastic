import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseApp = initializeApp({
  apiKey: "AIzaSyAfDlN3Hw3ZQCDqG714IAMvO5usfmLw480",
  authDomain: "plastic-1bc43.firebaseapp.com",
  projectId: "plastic-1bc43",
  storageBucket: "plastic-1bc43.appspot.com",
  messagingSenderId: "100031926847",
  appId: "1:100031926847:web:e66ca4781ebc5e861a5e8a"
})

const Firebase = getFirestore();
export default Firebase;