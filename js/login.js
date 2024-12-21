// password show and hide
document.getElementById("pass-s-h").addEventListener("change", function () {
    const passwordField = document.getElementById("password");
    const mes = document.getElementById("mes-s-h");

    if (this.checked) {
        passwordField.type = "text";
        mes.innerText = "hide password";
    } else {
        passwordField.type = "password";
        mes.innerText = "show password";
    }
  });
  