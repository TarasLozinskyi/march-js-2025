// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

const array = [1,'string', 'number', 'boolean', true ,false, 54,45464,757.56856];

const funList = arr =>{
    document.write('<ul>');
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write('</ul>');

}

funList(array);
