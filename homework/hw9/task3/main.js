// #jeBqHV525U5

// – Є масив
//
// let coursesAndDurationArray = [
//     { title: 'JavaScript Complex', monthDuration: 5 },
//     { title: 'Java Complex', monthDuration: 6 },
//     { title: 'Python Complex', monthDuration: 6 },
//     { title: 'QA Complex', monthDuration: 4 },
//     { title: 'FullStack', monthDuration: 7 },
//     { title: 'Frontend', monthDuration: 4 }
// ];
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
//
// Завдання робити через цикли.


const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const body = document.body;
for (const item of coursesAndDurationArray) {
    const block = document.createElement('div');
    block.innerText = item.title + ' ' + item.monthDuration;
    body.appendChild(block);
}










