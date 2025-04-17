// #awLXL6TBzg
//
// з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray.
// За допомогою if перевірити кожен його елемент на тривалість навчання. У випадку,
// якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let courses = coursesAndDurationArray;

if (courses[0].monthDuration> 5){
    console.log(courses[0].title +': Супер')
}
if (courses[1].monthDuration> 5){
    console.log(courses[1].title +': Супер')
}
if (courses[2].monthDuration> 5){
    console.log(courses[2].title +': Супер')
}
if (courses[3].monthDuration> 5){
    console.log(courses[3].title +': Супер')
}
if (courses[4].monthDuration> 5){
    console.log(courses[4].title +': Супер')
}
if (courses[5].monthDuration> 5){
    console.log(courses[5].title +': Супер')
}
