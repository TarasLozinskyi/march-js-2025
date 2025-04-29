// #XjJuucOMR0
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)
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

console.log(createArray());

