// #qLQLJSeN7i
//
// – є масив [2,17,13,6,22,31,45,66,100,-18] :

const arr = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
console.log('task1 (перебір циком while)')
let i = 0;
while(i<arr.length){
    console.log(arr[i]);
    i++;
}
console.log('-------------------------------------------------------------')



// 2. перебрати його циклом for
console.log('task2 (перебір циком for)')
for (let i = 0; i <arr.length ; i++) {
    console.log(arr[i])
}
console.log('--------------------------------------------------------------')




// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('task3 (непарним індексом while)')
let j = 1;
while(j<arr.length){
    console.log(arr[j])
    j+=2;
}
console.log('--------------------------------------------------------------')





// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('task4 (непарним індексом for)')
for (let i = 1; i < arr.length; i+=2) {
    console.log(arr[i]);
}
console.log('--------------------------------------------------------------')




// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('task5 (парні  значення while)')
let k = 0;
while(k<arr.length){
    if(arr[k]%2 ===0){
        console.log(arr[k])
    }

    k++;
}
console.log('--------------------------------------------------------------')




// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('task6 (парні  значення for)')

for (let i = 0; i < arr.length; i++) {
    if(arr[i]% 2=== 0){
        console.log(arr[i]);
    }
}

console.log('--------------------------------------------------------------')




// 7. замінити кожне число, кратне 3, на слово “okten”

console.log('task7 (замінити кожне число, кратне 3, на слово “okten”)')

for (let i = 0; i < arr.length; i++) {
    if(arr[i]% 3=== 0){
       arr[i] = 'okten';
    }
}
console.log(arr)

console.log('--------------------------------------------------------------')



// 8. вивести масив у зворотньому порядку.
console.log('task8 (вивести масив у зворотньому порядку)')

for (let i = arr.length-1; i >= 0; i--) {
    console.log(arr[i])
}
console.log('--------------------------------------------------------------')





// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)

const arr2 = [2,17,13,6,22,31,45,66,100,-18];
console.log('REVERSE TASK 9')




console.log('Reverse task1 (перебір циком while)')
let ri = arr2.length-1;
while(ri>=0){
    console.log(arr2[ri]);
    ri--;
}
console.log('-------------------------------------------------------------')





console.log('reverse task2 (перебір циком for)')
for (let i =arr2.length-1 ; i >=0 ; i--) {
    console.log(arr2[i])
}
console.log('--------------------------------------------------------------')



console.log('reverse task3 (непарним індексом while)')
console.log((arr2));
let rj = (arr2.length-1)%2===1 ?arr2.length-1: arr2.length-2;
while(rj>0){
    console.log(arr2[rj])
    rj-=2;
}
console.log('--------------------------------------------------------------')




console.log('reverse task4 (непарним індексом for)')
for (let i =arr2.length-1; i>=1; i-=2) {
    console.log(arr2[i]);
}
console.log('--------------------------------------------------------------')



// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('reverse task5 (парні  значення while)')
let rk = arr2.length-1;
while(rk>=0){
    if(arr2[rk]%2 === 0){
        console.log(arr2[rk])
    }
    rk--;
}
console.log('--------------------------------------------------------------')




// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log(' reverse task6 (парні  значення for)')

for (let i = arr2.length-1; i >=0 ; i--) {
    if(arr2[i]% 2 === 0){
        console.log(arr2[i]);
    }
}

console.log('--------------------------------------------------------------')




// 7. замінити кожне число, кратне 3, на слово “okten”

console.log('reverse task7 (замінити кожне число, кратне 3, на слово “okten”)')

for (let i = arr2.length; i>= 0 ; i--) {
    if(arr2[i]% 3 === 0){
        arr2[i] = 'okten';
    }
}
console.log(arr2.reverse())

console.log('--------------------------------------------------------------')
