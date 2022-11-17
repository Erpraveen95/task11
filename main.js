
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const number = document.querySelector('#Phone');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    const userDetails = {
      name :nameInput.value,
      email: emailInput.value,
      phone :number.value
    }
    var userDetails_toString = JSON.stringify(userDetails);
    localStorage.setItem('userDetails',userDetails_toString)
    

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
    number.value = "";
  }
}