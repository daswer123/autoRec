//FIREBASE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCgKn5drHD0kL6RawTiY3LNVw6tEQUJLo",
  authDomain: "todoapp-d8181.firebaseapp.com",
  databaseURL: "https://todoapp-d8181.firebaseio.com",
  projectId: "todoapp-d8181",
  storageBucket: "todoapp-d8181.appspot.com",
  messagingSenderId: "524163508174",
  appId: "1:524163508174:web:0ef5ddf9686c221389ad9f",
  measurementId: "G-B25DJHT6C9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(); // Инстанс текущей авторизации

// createUserWithEmailAndPassword(auth, login, pass) // Создать пользователя
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     console.log("Created");
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log("Нету такого");
//     // ..
//   });

//   signInWithEmailAndPassword(auth, login, pass) // Авторизоватся
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       console.log("Вошел!", user);
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("Нету такого");
//     });

//   console.log("Sended");

export { app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
