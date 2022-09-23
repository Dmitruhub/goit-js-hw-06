const listCategories = document.querySelector('#categories');

console.log(`Number of categories: ${listCategories.children.length}`);
console.log('');

const categoryItems = document.querySelectorAll('.item');

categoryItems.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
  console.log('');
});
