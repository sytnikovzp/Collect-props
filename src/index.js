'use strict';

let fName, lName, nName, email;

const fNameInput = document.querySelector('#f-name');
const lNameInput = document.querySelector('#l-name');
const nNameInput = document.querySelector('#nick-name');
const emailInput = document.querySelector('#email');
const btnOk = document.querySelector('#btn-container > button:last-child');

fNameInput.addEventListener('change', (e) => {
  fName = e.target.value;
});

lNameInput.addEventListener('change', (e) => {
  lName = e.target.value;
});

nNameInput.addEventListener('change', (e) => {
  nName = e.target.value;
});

emailInput.addEventListener('change', (e) => {
  email = e.target.value;
});

// ----------------------------------------------------------

class Persons {
  constructor(fName, lName, nName, email) {
    this.fName = fName;
    this.lName = lName;
    this.nName = nName;
    this.email = email;
  }
}

// ----------------------------------------------------------

function collectProps(e) {
  e.preventDefault();
  const person = new Persons(fName, lName, nName, email);
  const jsonStringify = JSON.stringify(person);
  localStorage.setItem(lName, jsonStringify);
}

btnOk.addEventListener('click', collectProps);
