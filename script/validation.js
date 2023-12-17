const submitButton = document.getElementById('sub');
const name = document.querySelector('#name');
const tel = document.querySelector('#tel');
const check = document.querySelector('#check');
const nameLabel = document.querySelector('#name-label');
const phoneLabel = document.querySelector('#phone-label');

function showNameLabel(){
  
  if(name.value==''){
    nameLabel.style.visibility = 'hidden';
  } else {nameLabel.style.visibility = 'visible';
          name.placeholder = '';
}
}
function showPhoneLabel(){
  
  if(tel.value==''){
    phoneLabel.style.visibility = 'hidden';
  } else {phoneLabel.style.visibility = 'visible';
  tel.placeholder = '';
}
}

function nameValidation(nm) {
  if (!name.value) {
    // nameLabel.classList.toggle('vis');
    // nameLabel.style.visibility = 'visible';
    // nameLabel.style.color = 'black';
    nameLabel.style.visibility = 'visible';
    nameLabel.style.color = 'red';
    name.placeholder = '';
    nameLabel.style.transition = "all .2s ease-in-out";
    setTimeout(function(){
      nameLabel.style.visibility = 'visible';
      nameLabel.style.color = 'black';
      nameLabel.style.transition = "all .2s ease-in-out";
      nameLabel.style.visibility = 'hidden';
      name.placeholder = 'Ім\'я';
 }, 2000);
  } else if(name.value==''){
    nameLabel.style.visibility = 'hidden';
    nameLabel.style.color = 'transparent';
    console.log('transparent')
  }
  else {
    nameLabel.style.visibility = 'visible';
  }
}

function telValidation() {
  if (!tel.value) {
    phoneLabel.style.visibility = 'visible';
    phoneLabel.style.color = 'red';
    tel.placeholder = '';
    phoneLabel.style.transition = "all .2s ease-in-out";
    setTimeout(function(){
      phoneLabel.style.visibility = 'visible';
      phoneLabel.style.color = 'black';
      phoneLabel.style.transition = "all .2s ease-in-out";
      phoneLabel.style.visibility = 'hidden';
      tel.placeholder = 'Номер телефону';
 }, 2000);
  }
  
  else if(tel.value==''){
    phoneLabel.style.visibility = 'hidden';
    phoneLabel.style.color = 'transparent';
    console.log('transparent ph')
  }
  else {
    phoneLabel.style.visibility = 'visible';
  }
}


function checkValidation() {
  if (!check.checked) {
    check.style.border = '2px solid';
    check.style.borderColor = 'red';
    check.style.transition = "all .2s ease-in-out";
    setTimeout(function(){
      check.style.border = '2px solid';
    check.style.borderColor = '#002F51';
    check.style.transition = "all .2s ease-in-out";
 }, 2000);
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