// #u3vmD0YJXh
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи

const arr = ['five', 1, 'four', true, false, 2, 'two', 3, false, true];

for (const arrElement of arr) {
    if (typeof arrElement === "boolean") {
        console.log(arrElement)
    }
}
