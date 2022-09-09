const nickname = document.querySelector('.nickname');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const repeatPassword = document.querySelector('.repeatPassword');
const signUp = document.querySelector('.signUp');
const form = document.querySelector('#form');
const span = document.querySelector('.span');
span.style.color = 'red';
const validation = (emailVal, passwordVal, repeatPasswordVal) => {
  const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const passwordPattern = /[A-Za-z0-9]/gi;
  if (!emailPattern.test(emailVal)) return 'invalid email';
  if (!passwordPattern.test(passwordVal) || passwordVal.length < 7) return 'your password must be at least 7 characters';
  if (passwordVal !== repeatPasswordVal) return 'passwords don\'t match';
  return true;
};
signUp.addEventListener('click', (e) => {
  e.preventDefault();
  const val = validation(email.value, password.value, repeatPassword.value);
  if (!email.value || !password.value || !repeatPassword.value) {
    span.textContent = 'Please fill in all fields';
  } else if (val === true) {
    fetch('/user/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: nickname.value, email: email.value, password: password.value }),
    }).then((res) => res.json())
      .then((data) => {
        if (data.state === 'success') window.location.href = '/feed';
        else {
          span.textContent = data.message;
        }
      });
  } else {
    span.textContent = val;
  }
});
