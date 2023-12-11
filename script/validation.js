const submitButton = document.getElementById('submit');
const name = document.querySelector('#name');
const tel = document.querySelector('#tel');
const check = document.querySelector('#check');

function nameValidation() {
  if (!name.value) {
    name.style.border = '1px solid';
    name.style.borderColor = 'red';
  }
}

function telValidation() {
  if (!tel.value) {
    tel.style.border = '1px solid';
    tel.style.borderColor = 'red';
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