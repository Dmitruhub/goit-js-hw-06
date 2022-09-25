const input = document.getElementById('validation-input');

const symbolsLength = input.dataset.length;

input.addEventListener('blur', changeBorder);

function changeBorder() {
  if (input.value.trim().length === Number(symbolsLength)) {
    toggleClassList('valid', 'invalid');
  }
  if (input.value.trim().length === 0) {
    removeClassList('invalid', 'valid');
  } else {
    toggleClassList('invalid', 'valid');
  }
}
function toggleClassList(add, remove) {
  input.classList.add(add);
  input.classList.remove(remove);
}
function removeClassList(one, two) {
  input.classList.remove(one);
  input.classList.remove(two);
}
