// #8Nmt60ZT
//
// – створити блок,
//
// – додати йому класи wrap, collapse, alpha, beta
//
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
//
// – додати цей блок в body.
//
// – клонувати його повністю, та додати клон в body.

const div = document.createElement('div');
const body = document.body;
div.innerText = 'Hello';
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
body.appendChild(div);
const cloneDiv = div.cloneNode(true);
body.appendChild(cloneDiv)


