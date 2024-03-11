'use strict';

const btnOk = document.querySelector('#btn-container > button:last-child'); // !

class Person {
  constructor(
    fName = document.getElementById('f-name').value,
    lName = document.getElementById('l-name').value,
    nName = document.getElementById('nick-name').value,
    email = document.getElementById('email').value
  ) {
    this.fName = fName;
    this.lName = lName;
    this.nName = nName;
    this.email = email;
  }
}

function collectProps(e) {
  e.preventDefault();
  const person = new Person();
  const jsonStringify = JSON.stringify(person);
  console.log(jsonStringify);
  localStorage.setItem(document.getElementById('l-name').value, jsonStringify);
}

btnOk.addEventListener('click', collectProps);
