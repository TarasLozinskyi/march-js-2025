// #5kla3yMpgp
//
// – (Те саме, тільки через клас)
//
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car


class Car {
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${(this.maxSpeed)} на годину`)
    }

    info() {
        console.log(`model – ${this.model}`);
        console.log(`producer – ${this.producer}`);
        console.log(`year – ${this.year}`);
        console.log(`maxSpeed – ${this.maxSpeed}`);
        console.log(`engineVolume – ${this.engineVolume}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }


}

const car = new Car('Mercedes E-Class', 'Mercedes-Benz', 2021, 260, 3.0);

car.drive();
car.info();
car.increaseMaxSpeed(50);
console.log(car.maxSpeed);
console.log('--------------------------------------')

car.changeYear(2023);
console.log(car.year);
console.log('--------------------------------------')

car.addDriver({name: 'Nazar', age: 23});
console.log(car.driver);
console.log(car)
