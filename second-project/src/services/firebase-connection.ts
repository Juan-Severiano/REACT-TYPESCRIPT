import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9xchbwJzteZ6yaz5t5aTuJri-jDczEu0",
  authDomain: "webcarros-67972.firebaseapp.com",
  projectId: "webcarros-67972",
  storageBucket: "webcarros-67972.appspot.com",
  messagingSenderId: "70793292427",
  appId: "1:70793292427:web:0a7404a4e5756ef889c28e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage }
