const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let listUl = document.getElementById("ingredients");
const items = ingredients.map((ingredient) => {
 const list = document.createElement('li');
 list.classList.add('item');
 list.textContent = ingredient;
 return list;

})

listUl.append(...items);



