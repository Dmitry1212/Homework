//console.log('hello');
"use strict";

function checkInput(input,pattern) {
    if (!pattern.test(input.value)) {
        input.style.borderColor = 'red';
        event.preventDefault();
    } else {
        input.style.borderColor = 'green';
    }
}

function checkForm() {
    checkInput(document.getElementById('name'),/^[a-zA-ZА-Яа-пр-я]+$/);
    checkInput(document.getElementById('phone'),/^\+7\(\d{3}\)\d{3}-\d{4}$/);
    checkInput(document.getElementById('email'),/^[a-zA-ZА-Яа-пр-я_.-]+@[a-z]+\.[a-z]{2,3}$/);

return false;
}

var sendForm = document.getElementById('contact');

sendForm.addEventListener('submit', checkForm);

