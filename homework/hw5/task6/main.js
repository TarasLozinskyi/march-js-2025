// #hOL6126
//
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

const funList = itemText => {
    document.write(`<ul>
    <li>${itemText}</li>
    <li>${itemText}</li>
    <li>${itemText}</li>
</ul>`)
}

funList('Однаковий текст');
