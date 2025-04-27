// #bolvdlhP
//
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
//  – знайти піковий туз
//  – всі шістки
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }


const value =['6', '7', '8', '9', '10','jack','queen','king','ace']
const cardSuit = ['spade', 'diamond', 'heart','clubs']

const createCards =(value, cardSuit)=>{
    const arr = []
    for (const itemValue of value) {
        for (const itemCardSuit of cardSuit) {
                arr.push({
                    value: itemValue,
                    cardSuit:itemCardSuit,
                    color: itemCardSuit === 'spade'||itemCardSuit === 'clubs'?'black': 'red'
                })
        }
    }

    return arr;
}
const cards = createCards(value, cardSuit)
// console.log(cards);


console.log('-----------------------------------------------------------------------------------------------------')


const findCards = (arr , callback)=>{
    return arr.filter(callback);
}

//  – знайти піковий туз
console.log(findCards(cards ,item =>item.value === 'ace' && item.cardSuit ==='spade'));
console.log('-----------------------------------------------------------------------------------------------------')

//  – всі шістки
console.log(findCards(cards ,item =>item.value === '6'));
console.log('-----------------------------------------------------------------------------------------------------')

//  – всі червоні карти
console.log(findCards(cards ,item =>item.color === 'red'));
console.log('-----------------------------------------------------------------------------------------------------')

//  – всі буби
console.log(findCards(cards ,item =>item.cardSuit === 'diamond'));
console.log('-----------------------------------------------------------------------------------------------------')

//  – всі трефи від 9 та більше
const clubs = findCards(cards ,item =>item.cardSuit === 'clubs')
console.log(findCards(clubs ,(item, index )=> index >3 ));



