const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit (event){
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  if(formElements.email.value.length === 0 || formElements.password.value.length === 0) {
    alert('Всі поля повинні бути заповнені');
  }
    const elements = {
      email: formElements.email.value,
      password:formElements.password.value
    }
  console.log(elements);
  event.currentTarget.reset();
};
