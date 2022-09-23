const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  !inputEl.value
    ? (spanEl.textContent = 'Anonymous')
    : (spanEl.textContent = inputEl.value.trim());
}
