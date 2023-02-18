const refs = {
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color')
}
refs.button.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  document.body.style.background =
  refs.span.textContent = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`  
}




