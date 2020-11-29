validateEmail = () => {
  let form = document.getElementsByClassName("auth-form")[0];
  const email = form["email"].value;

  email.required = true;

  let errors = document.getElementById("errors");
  errors.innerHTML = "";

  if (email.length < 5) {
    errors.innerHTML += "Email field should contain at least 5 characters <br />";
  }
  if (!(email.includes('.') && email.includes('@')) ) {
    errors.innerHTML += "Email field should contain '@' and '.' <br />"
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errors.innerHTML += "Email field is invalid. <br />";
  }

  if (errors.innerHTML != "") {
    return false;
  }
  errors.innerHTML = "";
  return true;
};

validatePassword = () => {
  let form = document.getElementsByClassName("auth-form")[0];
  const password = form['password'].value;

  let errors = document.getElementById('errors');

  if (password.length < 6 ) {
    errors.innerHTML += "Password should have at least 6 symbols <br />"
  }
  if (!password.match(/[0-9]/g)) {
    errors.innerHTML += "Password should contain at least one digit <br />"
  }
  if (!password.match(/[A-Z]/g)) {
    errors.innerHTML += "Password should contain at least one capital letter <br />"
  }
  if (!password.match(/[!@#$%^&]/g)) {
    errors.innerHTML += "Password should contain at least one special character from !@#$%^& <br />"
  }
  if (errors.innerHTML != "") {
    return false;
  }
  errors.innerHTML = "";
  return true;
}

document.addEventListener("DOMContentLoaded", function (event) {
  document
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const emailValid = validateEmail();
      const passwordValid = validatePassword();

      if (emailValid && passwordValid) {
        const currentPage = window.location.href.split("/").pop();
        if (currentPage == "register.html"){
          const form = document.getElementById("register-form");
          const email = form["email"].value;
          const username = form["username"].value;
          const password = form["password"].value;

          window.auth.register(username, email, password, (success, errCode, msg) => {
            if(success) {
              alert("You have successfully registered!");
            } else {
              alert(`Error ${errCode}. ${msg}`);
            }
          })

        } else if (currentPage == "index.html") {
          alert("You have sucessfully logged in!");
        }
      }
    });
});
