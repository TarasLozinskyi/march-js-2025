// #j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18,
// та повідомити про це користувача


const age = document.getElementById('age');
const btn = document.getElementsByTagName('button')[0];
const error = document.getElementsByClassName('error')[0];

btn.addEventListener('click', function (e){
    e.preventDefault();
    if(age.value<18 && age.value>0){
        error.innerHTML = 'Ваш вік менше 18';
        error.style.display = 'block';
        error.style.color = 'red';
    }else{
        error.style.display = 'none';
    }


})
