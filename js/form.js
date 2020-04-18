//  * form handling
const form = document.querySelector('#form');
const firstName = form.querySelector('#input-first-name');
const username = form.querySelector('#input-username');
const email = form.querySelector('#input-email');
const mobile = form.querySelector('#input-mobile');
const pass = form.querySelector('#input-password');
const cpass = form.querySelector('#input-confirm-password');
const submitButton = form.querySelector('#submit-button');
const error = form.querySelector('#error_box');
//  id hmmh na # ni lagaya tha tune
const validateForm = (e) => {
    // TODO mobile number ko number field bana usme kewal numbers ane chahie
    e.preventDefault(); // * avoid default submit action
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(firstName.value == '') {
        error.innerHTML = 'Please enter your firstname';
    } else if (username.value == '') {
        error.innerHTML = 'Please Enter unique username';
    } else if (email.value == '' || emailRegex.test(email.value)) {
        error.innerHTML = 'Enter valid email!';
    } else if (mobile.value == '' || mobile.value.length < 10 || mobile.value.length > 10) {
        error.innerHTML = 'Enter Valid mobile number!';
    } else if (pass.value == '' || pass.value.length < 6) {
        error.innerHTML = 'Ensure password is minimum 6 characters';
    } else if (pass.value != cpass.value) {
        error.innerHTML = 'Passwords do not match!';
    } else {
        error.innerHTML = '';
        alert('success');
    }
    setTimeout(() => {
        error.innerHTML = null;
    }, 5000);
};
// error submit krne pe hi change hoga apne app ni
submitButton.addEventListener('click', validateForm);