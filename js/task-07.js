const getInputEl = document.querySelector('input');
const getSpanEl = document.querySelector('span');

getSpanEl.style.fontSize = `${getInputEl.value}px`;

getInputEl.addEventListener('change', () => {
  const getSizeEl = getInputEl.value;
  console.log(getSizeEl);
  getSpanEl.style.fontSize = `${getSizeEl}px`;
});
