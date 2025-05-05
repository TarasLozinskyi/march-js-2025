// #bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком,
// в середині якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!!
// зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається


const block = document.createElement('div');
const body = document.body;

let money = localStorage.getItem('money') || '100грн'
block.textContent = money
setTimeout(()=>{
    money = parseInt(money)+ 10 +'грн';
    localStorage.setItem('money', money);

},10000)
body.appendChild(block);








