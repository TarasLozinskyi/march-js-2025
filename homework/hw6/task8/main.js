// ==========================
//
// #yo06d74c1C
//
// – є масив
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//  — відсортувати його за спаданням за monthDuration


const sortMonthDuration =(arr) =>{
    return arr.sort((a,b)=> b.monthDuration - a.monthDuration)
}
console.log(sortMonthDuration(coursesAndDurationArray));


//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
const filterMonthDuration = (arr) =>{
    return arr.filter(item=> item.monthDuration>5)
}
console.log(filterMonthDuration(coursesAndDurationArray));


//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

const newCoursesAndDurationArray = (arr) =>{
    return arr.map((item, index) => {
        return {
            id: index+1,
            ...item,

        }
    })
}

console.log(newCoursesAndDurationArray(coursesAndDurationArray))
