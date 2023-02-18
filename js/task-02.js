const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let listUl = document.getElementById("ingredients");
const ingredientAll =  ingredients.forEach((ingredient) => {
 const list = document.createElement('li');
 list.classList.add('item');
 list.textContent = (ingredient);
 listUl.append(list);
})
console.log(listUl)






