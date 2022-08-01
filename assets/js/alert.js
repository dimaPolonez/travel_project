const email = document.querySelector(".input-1");
const password = document.querySelector(".input-2");

const signAlert = document.querySelector(".sign-alert");


function message() {
    alert(`Your email: ${email.value}`);
    alert(`Your password: ${password.value}`);
    email.value = '';
    password.value = '';
}

signAlert.addEventListener("click", message);

