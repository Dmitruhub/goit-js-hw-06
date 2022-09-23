let counterValue = 0;

const counter = document.querySelector('#counter');
const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');
let spanValue = document.querySelector('#value');
decBtn.addEventListener('click', onDecBtnClick);
incBtn.addEventListener('click', onIncBtnClick);

function onDecBtnClick(evt) {
  counterValue -= 1;
  spanValue.textContent = counterValue;
}
function onIncBtnClick(evt) {
  counterValue += 1;
  spanValue.textContent = counterValue;
}
