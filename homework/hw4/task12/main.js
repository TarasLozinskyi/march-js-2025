// #kpsbSQCt2Lf
//
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const array =[11,22,33,44]
function swap(arr, index1, index2){
    let elem1 = arr[index1];
    arr[index1]= arr[index2]
    arr[index2] = elem1;
}

swap(array, 2, 3);
console.log(array);

