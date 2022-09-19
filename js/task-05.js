const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  spanEl.textContent = event.currentTarget.value.trim();

  if (event.currentTarget.value === '') {
    spanEl.textContent = 'Anonymous';
  }
}
