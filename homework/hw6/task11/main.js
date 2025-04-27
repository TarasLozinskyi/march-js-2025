// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
//
// {
//
//     spades:[],
//
//         diamonds:[],
//
//     hearts:[],
//
//     clubs:[]
//
// }


//Стврорення колоди карта
const value = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
const cardSuit = ['spade', 'diamond', 'heart', 'clubs']

const createCards = (value, cardSuit) => {
    const arr = []
    for (const itemValue of value) {
        for (const itemCardSuit of cardSuit) {
            arr.push({
                value: itemValue,
                cardSuit: itemCardSuit,
                color: itemCardSuit === 'spade' || itemCardSuit === 'clubs' ? 'black' : 'red'
            })
        }
    }

    return arr;
}
const cards = createCards(value, cardSuit)

const funReduce = (arr) => {
    return arr.reduce((previousValue, currentValue) => {
            if (currentValue.cardSuit === 'diamond') {
                previousValue.diamond.push(currentValue);
            } else if (currentValue.cardSuit === 'spade') {
                previousValue.spade.push(currentValue);
            } else if (currentValue.cardSuit === 'heart') {
                previousValue.heart.push(currentValue);
            } else {
                previousValue.clubs.push(currentValue);
            }
            return previousValue

        }, {
            spade: [],
            diamond: [],
            heart: [],
            clubs: []

        }
    )
}

console.log(funReduce(cards))
