// #9stMq2ou
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи

const arr = ['five', 1, 'four', true, 999, 2, 'two', 3, false, true];

for (const arrElement of arr) {
    if (typeof arrElement === "number") {
        console.log(arrElement)
    }
}
