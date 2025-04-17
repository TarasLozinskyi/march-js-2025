// #sA3Gg1sCp
//
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors.
// Поле “автори” – являється  масивом. Кожен автор має поля name та age.


const book1 = {
    title: 'Гаррі Поттер',
    pageCount: 400,
    genre: 'Роман',
    authors: [
        {
            name:'Дж.К. Роулинг',
            age: 59
        }
    ]
}

const book2 = {
    title: 'Алхімік',
    pageCount: 300,
    genre: 'Роман',
    authors: [
        {
            name:'Пауло Коэльог',
            age: 77
        }
    ]
}

const book3 = {
    title: 'Код да Вінчі',
    pageCount: 350,
    genre: 'Роман',
    authors: [
        {
            name: 'Дэн Браун',
            age: 60
        }
    ]
}
