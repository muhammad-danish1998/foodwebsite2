// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
//   FacebookAuthProvider,
//   OAuthProvider,
// } from "firebase/auth";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDu6qExWeTaf8DUw0IPzca2z7-_NdKbodw",
//   authDomain: "liefermarsde.firebaseapp.com",
//   projectId: "liefermarsde",
//   storageBucket: "liefermarsde.appspot.com",
//   messagingSenderId: "872215758083",
//   appId: "1:872215758083:web:967f3f61f9efcbdfb79536",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// // const provider = new GoogleAuthProvider();
// export const GoogleAuthprovider = new firebase.auth.GoogleAuthProvider();

// export const signInWithGoogle = (success, fail) => {
//   GoogleAuthprovider.addScope("profile");
//   GoogleAuthprovider.addScope("email");
//   signInWithPopup(auth, GoogleAuthprovider)
//     .then((result) => {
//       success(result);
//     })
//     .catch((error) => {
//       fail && fail();
//       // console.log(error);
//     });
// };

// export const signInWithFacebook = (success, fail) => {
//   const provider = new FacebookAuthProvider();
//   provider.addScope("email");
//   provider.addScope("public_profile");
//   provider.getScopes();

//   signInWithPopup(auth, provider)
//     .then((result) => {
//       success(result);
//     })
//     .catch((error) => {
//       fail && fail(error);
//     });
// };
