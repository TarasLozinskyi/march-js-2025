// #RbQGnH5DuC
//
// В localStorage зберігаються масиви.
// Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції –
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

const btn = document.createElement('button');
btn.innerText = 'Видалити все із localStorage';
const body =document.body;
btn.onclick = function (){
    localStorage.clear()
}
const addToLocalStorage =(arrayName, objToAdd)=>{
    const arr = JSON.parse(localStorage.getItem(arrayName))||[];
    arr.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(arr));
}

addToLocalStorage('user', {name: 'Nazar', age: 23});
addToLocalStorage('client', {name: 'Kapusta', age: 23});

body.appendChild(btn);
