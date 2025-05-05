// #NKB0tgWIK1G
//
// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
// При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів


const arr = []
for (let i = 0; i < 100; i++) {
    arr.push({
        id: i + 1,
        name: `User${i + 1}`,

    })
}


const prev = document.getElementById('prev');
const next = document.getElementById('next');
let start = 0;
let count = 10;
const block = document.getElementById('block');

const pagination = (arr, start, count , bool) => {
    block.innerHTML = '';
    const pageItems = arr.slice(start, count);  // вибираємо елементи для поточної сторінки
    pageItems.forEach(item => {
        block.innerHTML += JSON.stringify(item) + '<br>';  // додаємо кожен елемент
    });
}
pagination(arr,start, count, );

next.onclick = function (e){
    e.preventDefault();
    if(count===90){
        next.disabled = true;
    }
    prev.disabled = false;
    start= count;
    count+= 10;
    pagination(arr,start,count, );
}

prev.onclick = function (e){
    e.preventDefault();
    if(start===10){
        prev.disabled = true;
    }
    next.disabled =false;
    start -= 10;
    count = start + 10;
    pagination(arr,start,count,);
}
