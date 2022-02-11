const login = document.querySelector(".auth--login");
const register = document.querySelector(".auth--register");
const btnSwitchLogin = document.querySelector(".auth--login .auth__change");
const btnSwithRegister = document.querySelector(".auth--register .auth__change");

const changeForm = (e) => {
  // e.preventDefault();
  console.log(register.classList, login.classList);
  console.log("click");

  login.classList.toggle("active");
  register.classList.toggle("active");
};

// changeForm();

btnSwitchLogin.addEventListener("click", changeForm);
btnSwithRegister.addEventListener("click", changeForm);
