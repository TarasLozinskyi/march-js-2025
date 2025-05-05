// #sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
let btn = document.getElementsByTagName('button')[0];
const text = document.getElementById('text');

btn.onclick = function (){
    text.style.display = 'none';
}

