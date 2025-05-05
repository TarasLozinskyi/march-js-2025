// #2VaLt4vDczH
//
// є сторінка, на якій є блок, в кому знаходиться цифра.
// Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1


const block = document.createElement('div');
const body = document.body;
const btn = document.getElementsByTagName('button')[0];

let counter = JSON.parse(localStorage.getItem('counter'))|| 0;
counter++;
localStorage.setItem('counter', JSON.stringify(counter));

//-----------обнулити----------------------------

btn.onclick = function (){
   counter = 0;
   localStorage.setItem('counter', JSON.stringify(counter));
   block.innerText = counter;
}

block.innerText = counter;
body.append(block);

