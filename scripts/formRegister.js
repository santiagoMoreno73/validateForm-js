const user_name = document.getElementById("user_name");
const last_name = document.getElementById("last_name");
const age = document.getElementById("age");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const warning = document.getElementById("warnings");
const send_info = document.getElementById("send_info");

// go home
function linkToHome() {
  location.href = `login.html`;
}

// validations
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let enter = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  warning.innerHTML = "";
  if (user_name.value.length < 6) {
    warnings += `El nombre no es valido <br>`;
    enter = true;
  }
  if (!regexEmail.test(email.value)) {
    warnings += `El email no es valido <br>`;
    enter = true;
  }
  if (password.value.length < 4) {
    warnings += `La contraseña no es valida <br>`;
    enter = true;
  }

  if (enter) {
    warning.innerHTML = warnings;
  } else {
    send_info.innerHTML = "Enviando ...";
    setTimeout(() => {
      send_info.innerHTML = "Enviado";
    }, 2000);
  }
});
