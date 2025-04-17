// #0pm3EyTKy9
//
// – Створити порожній масив.
// Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

const arr = [];

arr[0] = 1;
arr[1] = 'time';
arr[2] = 'nine';
arr[3] = true;
arr[4] = 3579345;
arr[5] = 1435;
arr[6] = false;
arr[7] = 1535;
arr[8] = 10;
arr[9] = 19;

for (const arrElement of arr) {
    console.log(arrElement);
}
