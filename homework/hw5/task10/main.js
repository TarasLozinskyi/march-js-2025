// #pghbnSB
//
// – створити функцію яка повертає найменьше число з масиву

const array = [0, 243, 5436, 44756, 76, 455, 43535345, -346464, -6654, 6564, 645, -4]

const minNumber = arr => {
    let minN = arr[0];
    for (const item of arr) {
        if (item < minN) {
            minN = item;
        }
    }
    return minN;
}

console.log(minNumber(array));
