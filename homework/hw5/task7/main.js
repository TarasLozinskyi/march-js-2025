// #0Kxco1edSN
//
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write


const funList = (text, countItem)=>{
    document.write('<ul>')
    for (let i = 0; i < countItem; i++) {
        document.write(`<li>${text} ${i+1}</li>`)
    }
    document.write('</ul>')
}

funList('Однаковий текст', 12);
