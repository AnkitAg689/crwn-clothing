import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBS-03G39HIuWNleqK3gMUJo3L1nB1_Nko",
  authDomain: "react-udemy-crwn-db.firebaseapp.com",
  databaseURL: "https://react-udemy-crwn-db.firebaseio.com",
  projectId: "react-udemy-crwn-db",
  storageBucket: "react-udemy-crwn-db.appspot.com",
  messagingSenderId: "344148333547",
  appId: "1:344148333547:web:b70e8b2d97f586517dffae",
  measurementId: "G-2V7W0D45MR",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    console.log("Snapshot exists!", snapShot);
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
