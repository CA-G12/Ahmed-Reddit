const email = document.querySelector('.email');
const password = document.querySelector('.password');
const login = document.querySelector('.login');
const form = document.querySelector('#form');
const span = document.createElement('span');
span.style.color = 'red';
form.appendChild(span);
const validation = (emailVal, passwordVal) => {
  const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const passwordPattern = /[A-Za-z0-9]/gi;
  if (!emailPattern.test(emailVal)) return 'invalid email';
  if (!passwordPattern.test(passwordVal) || passwordVal.length < 7) return 'your password must be at least 7 characters';
  return true;
};
login.addEventListener('click', (e) => {
  e.preventDefault();
  const val = validation(email.value, password.value);
  if (!email.value || !password.value) {
    span.textContent = 'Please fill in all fields';
  } else if (val === true) {
    fetch('/user/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value, password: password.value }),
    }).then((res) => res.json())
      .then((data) => {
        if (data.message === 'successful') window.location.href = '/feed';
        else {
          span.textContent = data.message;
        }
      });
  } else {
    span.textContent = val;
  }
});
