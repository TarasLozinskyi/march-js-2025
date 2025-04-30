// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об’єкта.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

const user = {
    title: 'Java Complex',
    monthDuration: 6,
    num: [1, 2, 3, 4],
    fun: () => {
        console.log('hello');
    },
    fun2: () => {
    }
};


const copyObjUser = (obj) => {
    if (obj) {
        const stringify = JSON.stringify(obj);
        const parse = JSON.parse(stringify);
        const newObj = {}
        for (const objKey in obj) {
            if (typeof obj[objKey]=== 'function' ) {
                newObj[objKey] = obj[objKey];
            }
        }

        return ({...parse, ...newObj}); //({})- обєкт, {} - блок коду

    }
    return '';
}

const copy = copyObjUser(user);
console.log(copy);
console.log(copy === user)
console.log(copy?.num === user?.num)
copy.fun()




//---------------------------------------------------

// const clone = structuredClone(user);
// console.log(clone)
// console.log(clone === user);
// console.log(clone?.num === user?.num);
