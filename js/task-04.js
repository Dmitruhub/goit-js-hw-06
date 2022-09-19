let counterValue = 0;

const counter = document.getElementById('counter');

const buttons = document.querySelectorAll('#counter button');
const decrement = buttons[0];
const increment = buttons[1];

decrement.addEventListener('click', () => {
  counterValue -= 1;
  updateSpanValue();
});

increment.addEventListener('click', () => {
  counterValue += 1;
  updateSpanValue();
});

const updateSpanValue = () =>
  (document.getElementById('value').textContent = counterValue);
