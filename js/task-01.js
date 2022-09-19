const listCategories = document.querySelector('#categories');

console.log(`Number of categories: ${listCategories.children.length}`);
console.log('');

Array.from(listCategories.children).forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.querySelectorAll('li').length}`);
  console.log('');
});
