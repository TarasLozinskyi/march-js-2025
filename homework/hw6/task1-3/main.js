// #dFeorS3m7u
//
// – Знайти та вивести довжину наступних стрінгових значень
//
//  ‘hello world’
//
// ‘lorem ipsum’
//
// ‘javascript is cool’
// -------------------------------------------------------
// #8lld9HMxXWB
//
// – Перевести до великого регістру наступні стрінгові значення
// -----------------------------------------------------
//#ClDsAm7xba7
//
// – Перевести до нижнього регістру наступні стрінгові значення


//переробив трохи завдання під використання методів масиву, callback function а також arrow function

const arr =  ['hello WORLD', 'lorem ipsum', 'javascript is cool' ];
console.log(arr)

const lengthString = (arr, callback ) => arr.map(callback);

console.log(lengthString(arr, str => str.length));
console.log(lengthString(arr, str => str.toUpperCase()));
console.log(lengthString(arr, str => str.toLowerCase()));

