// #coYydZuaeEB
//
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу


const days = [
    {
        id:1,
        day:'Monday',
        timeOfDay : [
            {
                name: "morning",
                temperature: 18,
            },
            {
                name: "dinner",
                temperature: 22,
            },
            {
                name: "evening",
                temperature: 22,
            },
        ]

    },
    {
        id:2,
        day:'Tuesday ',
        timeOfDay : [
            {
                name: "morning",
                temperature: 18,
            },
            {
                name: "dinner",
                temperature: 22,
            },
            {
                name: "evening",
                temperature: 22,
            },
        ]

    },
    {
        id:3,
        day:'Wednesday ',
        timeOfDay : [
            {
                name: "morning",
                temperature: 18,
            },
            {
                name: "dinner",
                temperature: 22,
            },
            {
                name: "evening",
                temperature: 22,
            },
        ]

    },
    {
        id:4,
        day:'Thursday ',
        timeOfDay : [
            {
                name: "morning",
                temperature: 18,
            },
            {
                name: "dinner",
                temperature: 22,
            },
            {
                name: "evening",
                temperature: 22,
            },
        ]

    },
    {
        id:5,
        day:'Friday ',
        timeOfDay : [
            {
                name: "morning",
                temperature: 18,
            },
            {
                name: "dinner",
                temperature: 22,
            },
            {
                name: "evening",
                temperature: 22,
            },
        ]

    },
    {
        id:6,
        day:'Saturday ',
        timeOfDay : [
            {
                name: "morning",
                temperature: 18,
            },
            {
                name: "dinner",
                temperature: 22,
            },
            {
                name: "evening",
                temperature: 22,
            },
        ]

    },
    {
        id:7,
        day:'Sunday ',
        timeOfDay : [
            {
                name: "morning",
                temperature: 18,
            },
            {
                name: "dinner",
                temperature: 22,
            },
            {
                name: "evening",
                temperature: 22,
            },
        ]

    },
]

console.log('Довжина масиву: ' +days.length)
