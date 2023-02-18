const refs = {
input: document.querySelector('#controls input'),
createButton: document.querySelector('#controls button[data-create]'),
destroyButton: document.querySelector('#controls button[data-destroy]'),
addDiv: document.querySelector('#boxes'),
}

refs.addDiv.style.display = 'flex';
refs.addDiv.style.gap = '10px';
refs.addDiv.style.flexWrap = 'wrap';


refs.input.addEventListener('input', onInputChange)
refs.createButton.addEventListener('click', onCreateButton)
refs.destroyButton.addEventListener('click', onDestroyButton)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onCreateButton(){
  createBoxes(refs.input.value);
}

let inputValue = 0;
function onInputChange(event){
  inputValue = event.currentTarget.value;
 
}

function createBoxes(amount){
  let size = 20;
  for (let i = 0; i < amount; i += 1 ) {
    size += 10;
    let listDiv = document.getElementById("boxes");
    const list = document.createElement('div');
    list.style.height = `${size}px`;
    list.style.width = `${size}px`;
    list.style.backgroundColor = getRandomHexColor();
    listDiv.append(list)
    console.log(listDiv)
  }  
}

function onDestroyButton(){
  refs.input.value = '';
  refs.addDiv.innerHTML = '';
}


