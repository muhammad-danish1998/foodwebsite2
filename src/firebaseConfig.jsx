import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyADIWXxQRVwoKb9iEBmwzaYPTwCTiMJvp8",
  authDomain: "liefermars-4b98d.firebaseapp.com",
  projectId: "liefermars-4b98d",
  storageBucket: "liefermars-4b98d.appspot.com",
  messagingSenderId: "233023646273",
  appId: "1:233023646273:web:8c3d5146f9105a32efb4c0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();
export const GoogleAuthprovider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = (success, fail) => {
  GoogleAuthprovider.addScope("profile");
  GoogleAuthprovider.addScope("email");
  signInWithPopup(auth, GoogleAuthprovider)
    .then((result) => {
      success(result);
    })
    .catch((error) => {
      fail && fail(error);
    });
};

export const signInWithFacebook = (success, fail) => {
  const provider = new FacebookAuthProvider();
  provider.addScope("email");
  provider.addScope("public_profile");
  provider.getScopes();

  signInWithPopup(auth, provider)
    .then((result) => {
      success(result);
    })
    .catch((error) => {
      fail && fail(error);
    });
};
