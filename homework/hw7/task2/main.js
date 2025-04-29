// #2ikXsE2WiKZ
//
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
function User(id,name, surname,email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const createArray = ()=>{
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(new User(
            i+1,
            'Taras',
            'Slowinski',
            'tslowinski@gmail.com',
            '+3809995900'));
    }

    return arr;
}

createArray();

const filteringById = (arr)=>{
    return arr.filter(item => item.id % 2 === 0);
}

console.log(filteringById(createArray()));
