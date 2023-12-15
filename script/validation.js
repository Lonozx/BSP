const submitButton = document.getElementById('sub');
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

const submitMob = document.getElementById('submit-mob');
const nameMob = document.querySelector('#name-mob');
const telMob = document.querySelector('#tel-mob');
const checkMob = document.querySelector('#check-mob');
const nameLabelMob = document.querySelector('#name-label-mob');
const phoneLabelMob = document.querySelector('#phone-label-mob');

function nameValidationMob() {
  if (!nameMob.value) {
    nameLabelMob.style.color = 'red';
  }
}

function telValidationMob() {
  if (!telMob.value) {
    phoneLabelMob.style.color = 'red';
    
  }
}
function checkValidationMob() {
  if (!checkMob.checked) {
    checkMob.style.border = '2px solid';
    checkMob.style.borderColor = 'red';

  }
}

submitMob.addEventListener('click', e => {
  e.preventDefault();
  nameValidationMob();
  telValidationMob();
  checkValidationMob();
});