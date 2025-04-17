// #4WrHwFTEop0
//
// є масив
//
// let users = [
//     { name: 'vasya', age: 31, status: false },
//     { name: 'petya', age: 30, status: true },
//     { name: 'kolya', age: 29, status: true },
//     { name: 'olya', age: 28, status: false },
//     { name: 'max', age: 30, status: true },
//     { name: 'anya', age: 31, status: false },
//     { name: 'oleg', age: 28, status: false },
//     { name: 'andrey', age: 29, status: true },
//     { name: 'masha', age: 30, status: true },
//     { name: 'olya', age: 31, status: false },
//     { name: 'max', age: 31, status: true }
// ];
//
// за допомогою циклу вивести:
//– користувачів зі статусом true
//– користувачів зі статусом false
//– користувачів, які старші за 30 років

let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];

//– користувачів зі статусом true
document.write('<h2>Користувачі зі статусом true</h2>')
document.write('<ul>')
for (const user of users) {
    if(user.status){
        document.write(`<li>${user.name} ${user.age} ${user.status}</li>`)
    }
}
document.write('</ul>')


//– користувачів зі статусом false
document.write('<h2>Користувачі зі статусом false</h2>')
document.write('<ul>')
for (const user of users) {
    if(!user.status){
        document.write(`<li>${user.name} ${user.age} ${user.status}</li>`)
    }
}
document.write('</ul>')


//– користувачів, які старші за 30 років
document.write('<h2>Користувачі, старші за 30 років</h2>')
document.write('<ul>')
for (const user of users) {
    if(user.age>30){
        document.write(`<li>${user.name} ${user.age} ${user.status}</li>`)
    }
}
document.write('</ul>')
