// #zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку


class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

const cinderellas = [
    new Cinderella('Anna', 19, 36),
    new Cinderella('Olena', 21, 37),
    new Cinderella('Ira', 18, 35),
    new Cinderella('Sofia', 22, 38),
    new Cinderella('Katya', 20, 36.5),
    new Cinderella('Marta', 23, 39),
    new Cinderella('Nastia', 19, 37.5),
    new Cinderella('Tanya', 25, 40),
    new Cinderella('Oksana', 24, 38.5),
    new Cinderella('Vika', 20, 36)
];
const prince = new Prince('Danylo', 25, 36.5);

console.log(cinderellas.find(item => item.footSize === prince.shoeSize));
