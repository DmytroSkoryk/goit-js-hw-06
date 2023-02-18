const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

const categoriesList = [...totalCategories].map(categories => 
`Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`)
.forEach((element) => console.log('\n' + element))

