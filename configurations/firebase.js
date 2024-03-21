import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_APIKEY,
  authDomain: "pc-palace.firebaseapp.com",
  projectId: "pc-palace",
  storageBucket: "pc-palace.appspot.com",
  messagingSenderId: "917374258076",
  appId: "1:36614120009:web:0bfb5174cbacf1ad459598", //
  measurementId: "G-DFFVS9MX4V" //
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const authGoogle = new GoogleAuthProvider();
export const authFacebook = new FacebookAuthProvider();
export const database = getFirestore(app);
export const collectionDB = collection(database, "usersWithName"); //DRAFT, you can change the collection name later
export const storage = getStorage(app); // Add this line to initialize Firebase Storage
