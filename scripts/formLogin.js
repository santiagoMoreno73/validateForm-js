const email = document.getElementById("email");
const password = document.getElementById("password");
const warning = document.getElementById("warnings");
const send = document.getElementById("send");

// go register
function linkTo() {
  location.href = `register.html`;
}

// validations
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let enter = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  warning.innerHTML = "";
  if (!regexEmail.test(email.value)) {
    warnings += `El email no es válido <br>`;
    enter = true;
  }
  if (password.value.length < 4) {
    warnings += `Contraseña no válida <br>`;
    enter = true;
  }

  if (enter) {
    warning.innerHTML = warnings;
  } else {
    send.innerHTML = "Ingresando ...";
    setTimeout(() => {
      send.innerHTML = "Ingresaste";
    }, 2000);
  }
});
