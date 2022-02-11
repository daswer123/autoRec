import { auth, app, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "./firebase.js";

// APP LOGIC

const loginForm = document.querySelector(".auth--login");
const registerForm = document.querySelector(".auth--register");
const btnSwitchLogin = document.querySelector(".auth--login .auth__change");
const btnSwithRegister = document.querySelector(".auth--register .auth__change");

const changeForm = (e) => {
  loginForm.classList.toggle("active");
  registerForm.classList.toggle("active");
};

btnSwitchLogin.addEventListener("click", changeForm);
btnSwithRegister.addEventListener("click", changeForm);

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const login = "daswerq123@gmail.com";
  const pass = "123123";
});
