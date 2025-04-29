// #vV9a6584I5
//
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

function Car(model, producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.info = function () {
        console.log(`model – ${this.model}`);
        console.log(`producer – ${this.producer}`);
        console.log(`year – ${this.year}`);
        console.log(`maxSpeed – ${this.maxSpeed}`);
        console.log(`engineVolume – ${this.engineVolume}`);
    }

    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed+=newSpeed;
    }

    this.changeYear = function (newValue){
        this.year = newValue;
    }
    this.addDriver = function (driver){
        this.driver = driver;
    }


}

const car = new Car('BMW M5', 'BMW', 2020, 250, 4.4);

car.drive();
console.log('--------------------------------------')
car.info();
console.log('--------------------------------------')

car.increaseMaxSpeed(50);
console.log(car.maxSpeed);
console.log('--------------------------------------')

car.changeYear(2022);
console.log(car.year);
console.log('--------------------------------------')

car.addDriver({name: 'Nazar', age: 23});
console.log(car.driver);
console.log(car)
