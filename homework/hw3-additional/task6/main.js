// #Bm76xmg
//
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

const arr = ['one', 1, 2, 3, 4, 5, 6, true, false, null];

console.log(arr.length+ '- довжина масива')

for (const arrElement of arr) {
    console.log(arrElement);
}
