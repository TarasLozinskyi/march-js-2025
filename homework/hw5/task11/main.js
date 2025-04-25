// #EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13


const array = [0, 243, 5436, 44756 ,34546665, 76, 455, -43535345, -346464, -6654, 6564, 645, -4];

const sum = arr =>{
    let res = 0;
    for (const item of arr) {
        res += item;
    }
    return res;
}

console.log(sum(array));
