// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const kg = document.getElementById('kg');
const lb = document.getElementById('lb');

kg.onchange = function (){
    lb.value = (Number(this.value) *2.205).toFixed(3).toString()
}
lb.onchange = function (){
    kg.value = (Number(this.value) /2.205).toFixed(3).toString()
}

console.log( kg.value )
