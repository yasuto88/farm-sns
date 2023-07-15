import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLm-eD6pPruByvS-nmiYJeLp8jRKH20Rw",
  authDomain: "farm-sns.firebaseapp.com",
  databaseURL:
    "https://farm-sns-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "farm-sns",
  storageBucket: "farm-sns.appspot.com",
  messagingSenderId: "424844278983",
  appId: "1:424844278983:web:805e44b665015b9bfe92e2",
  measurementId: "G-9JL56FP9QV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
