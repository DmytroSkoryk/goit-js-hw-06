const input = document.querySelector('#validation-input');
const inputRightData = input.getAttribute('data-length')
input.addEventListener('blur', onBorderChange);
function onBorderChange(event){
   if(event.currentTarget.value.length !== parseInt(inputRightData)){
    input.classList.add("invalid");
    
}
   else {
    input.classList.remove("invalid");
    input.classList.add("valid");
}
}
