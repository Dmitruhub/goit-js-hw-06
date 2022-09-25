const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const input = document.querySelector('#controls > input');
console.log(btnCreate);
console.log(btnDestroy);
console.log(input);
const boxesHtml = document.querySelector('#boxes');
const setRGB = () => {
  //const randomColor = Math.round(Math.random(0, 1) * 255);

  const red = Math.round(Math.random(0, 1) * 255);
  const green = Math.round(Math.random(0, 1) * 255);
  const blue = Math.round(Math.random(0, 1) * 255);

  return `rgb(${red},${green},${blue})`;
};
function createBox() {
  let amount = input.value;
  const divList = [];
  for (let i = 1; i <= amount; i += 1) {
    const divSize = 30;
    let boxGrow = divSize + i * 10;
    const divItem = `<div style="width:${boxGrow}px; height:${boxGrow}px; background-color:${setRGB()}"></div>`;
    divList.push(divItem);
  }
  boxesHtml.insertAdjacentHTML('beforeend', divList.join(''));
}
function destroyBox() {
  boxesHtml.innerHTML = '';
  input.value = '';
}
function onEnterClick(evt) {
  console.log(evt.code);
  if (evt.code === 'Enter') {
    createBox();
  }
}
function onDeleteClick(evt) {
  console.log(evt.code);
  if (evt.code === 'Delete') {
    destroyBox();
  }
}
btnDestroy.addEventListener('click', destroyBox);
btnCreate.addEventListener('click', createBox);
input.addEventListener('keydown', onEnterClick);
input.addEventListener('keydown', onDeleteClick);
