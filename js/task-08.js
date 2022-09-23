const formAutorization = document.querySelector('.login-form');

formAutorization.addEventListener('submit', onAutorization);

function onAutorization(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const formData = {
    email: email.value,
    password: password.value,
  };

  if (!email.value || !password.value) {
    alert('Please fill in all the fields!');
  } else {
    console.log(formData);
  }
  event.currentTarget.reset();
}
