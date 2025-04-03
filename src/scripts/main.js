'use strict';

const inputs = [...document.querySelectorAll('input')];

for (let i = 0; i < inputs.length; i++) {
  const labelHTML = `<label class= "field-label" for="${inputs[i].id}">${inputs[i].name}</label>`;

  inputs[i].insertAdjacentHTML('beforebegin', labelHTML);

  inputs[i].placeholder = inputs[i].name.toUpperCase();
}
