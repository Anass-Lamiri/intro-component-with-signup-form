const fName = document.getElementById('first-name');
const lName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');


submit.addEventListener('click', () => {
    fName.value.trim() === "" ? fName.parentElement.classList.add("error") : fName.parentElement.classList.remove("error");
    lName.value.trim() === "" ? lName.parentElement.classList.add("error") : lName.parentElement.classList.remove("error");;
    password.value.trim() === "" ? password.parentElement.classList.add("error") : password.parentElement.classList.remove("error");;

    if (email.value.trim() === "") {
        email.parentElement.classList.add("error");
        email.setAttribute("placeholder", "email@example/com");
    } else {
        email.parentElement.classList.remove("error");
    }

})


