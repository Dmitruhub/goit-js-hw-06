const body = document.querySelector('body');
const buttonInput = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

buttonInput.addEventListener('click', makeColor);

function makeColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
