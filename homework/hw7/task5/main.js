//
// #8abtVjRv
//
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

function Client(id, name, surname, email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

const clients = [
    new Client(1, 'Ivan', 'Petrenko', 'ivan1@gmail.com', '+380111111111', ['milk', 'bread']),
    new Client(2, 'Oksana', 'Koval', 'oksana2@gmail.com', '+380222222222', ['water']),
    new Client(3, 'Andriy', 'Shevchenko', 'andriy3@gmail.com', '+380333333333', ['juice', 'apple', 'banana']),
    new Client(4, 'Svitlana', 'Marchenko', 'svitlana4@gmail.com', '+380444444444', ['eggs', 'bread']),
    new Client(5, 'Olena', 'Tkachenko', 'olena5@gmail.com', '+380555555555', ['milk']),
    new Client(6, 'Dmytro', 'Bondar', 'dmytro6@gmail.com', '+380666666666', ['meat', 'cheese', 'water']),
    new Client(7, 'Taras', 'Ivanov', 'taras7@gmail.com', '+380777777777', ['juice']),
    new Client(8, 'Natalia', 'Hrytsenko', 'natalia8@gmail.com', '+380888888888', ['bread', 'eggs', 'milk']),
    new Client(9, 'Yuriy', 'Polishchuk', 'yuriy9@gmail.com', '+380999999999', ['coffee', 'tea']),
    new Client(10, 'Iryna', 'Melnyk', 'iryna10@gmail.com', '+380101010101', ['sugar', 'flour', 'oil', 'salt'])
];

const sortOrder =(arr)=>{
    return arr.sort((a,b)=>a.order.length -b.order.length);
}
console.log(sortOrder(clients));
