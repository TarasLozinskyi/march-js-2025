// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ.
// Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом


const form = document.getElementsByTagName('form')[0];
const btn = document.getElementsByClassName('btn')[0];

const info = {};
const body  = document.body;
btn.addEventListener('click', function (e){
    e.preventDefault();
    info.name = form.theName.value;
    info.surname = form.theSurname.value;
    info.age = form.theAge.value;
    const block = document.createElement('div');
    block.innerText = `${info.name} - ${info.surname}:${info.age}`;
    body.appendChild(block);
})




