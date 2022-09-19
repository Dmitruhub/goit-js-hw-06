const formAutorization = document.querySelector('.login-form');

formAutorization.addEventListener('submit', onAutorization);

function onAutorization(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const formData = new FormData(event.currentTarget);

  if (!email.value || !password.value) {
    alert('Please fill in all the fields!');
  } else {
    const data = {};

    formData.forEach((value, name) => {
      data[name] = value;
    });

    console.log(data);
  }

  event.currentTarget.reset();
}
