'use strict';
const inputs = [
    ...document.querySelectorAll('input')
];
inputs.forEach((input)=>{
    const label = document.createElement('label');
    label.className = 'field-label';
    label.htmlFor = input.id;
    label.textContent = input.name;
    input.placeholder = input.name.toUpperCase();
    input.parentNode.prepend(label);
});

//# sourceMappingURL=js_task_fix_form_DOM.f75de5e1.js.map
