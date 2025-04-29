// #pOeHKct
//
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

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

const sortArr = (arr)=>{
    return arr.sort((a,b )=> b.id - a.id); // я відсортував по стаданні тому що воно і так відсортоване по зростанні
}

console.log(sortArr(createArray()));
