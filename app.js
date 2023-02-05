const form = document.getElementById("form");
const button = document.querySelector(".submit")

form.addEventListener('submit', submitForm);

function submitForm(e) {
    if(document.getElementById("confirm-password").value != document.getElementById("password").value) {
        alert("Your passwords do not match, please retype them");
        e.preventDefault();
    }
}