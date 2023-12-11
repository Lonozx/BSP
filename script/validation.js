const submitButton = document.getElementById('submit');
const name = document.querySelector('#name');
const tel = document.querySelector('#tel');
const check = document.querySelector('#check');
const nameLabel = document.querySelector('#name-label');
const phoneLabel = document.querySelector('#phone-label');


function nameValidation() {
  if (!name.value) {
    nameLabel.style.color = 'red';
  }
}

function telValidation() {
  if (!tel.value) {
    phoneLabel.style.color = 'red';
    
  }
}
function checkValidation() {
  if (!check.checked) {
    check.style.border = '2px solid';
    check.style.borderColor = 'red';

  }
}

submitButton.addEventListener('click', e => {
  e.preventDefault();
  nameValidation();
  telValidation();
  checkValidation();
});