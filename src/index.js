'use strict';

const btnOk = document.querySelector('#btn-container > button:last-child');

class Person {
  constructor(fName, lName, nName, email) {
    this.fName = fName;
    this.lName = lName;
    this.nName = nName;
    this.email = email;
  }
}

function collectProps(e) {
  e.preventDefault();
  const person = new Person(
    document.getElementById('f-name').value,
    document.getElementById('l-name').value,
    document.getElementById('nick-name').value,
    document.getElementById('email').value
  );
  const jsonStringify = JSON.stringify(person);
  console.log(jsonStringify);
  localStorage.setItem(document.getElementById('l-name').value, jsonStringify);
}

btnOk.addEventListener('click', collectProps);
