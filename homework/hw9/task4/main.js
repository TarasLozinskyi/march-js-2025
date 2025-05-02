// #Kx1xgoKy8
//
// – Є масив
// let coursesAndDurationArray = [
//     { title: 'JavaScript Complex', monthDuration: 5 },
//     { title: 'Java Complex', monthDuration: 6 },
//     { title: 'Python Complex', monthDuration: 6 },
//     { title: 'QA Complex', monthDuration: 4 },
//     { title: 'FullStack', monthDuration: 7 },
//     { title: 'Frontend', monthDuration: 4 }
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,
// в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
//     Завдання робити через цикли.

let coursesAndDurationArray = [
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
    const h1 = document.createElement('h1');
    const p = document.createElement('p')
    block.classList.add('item');
    h1.classList.add('heading');
    block.classList.add('description');
    h1.innerText = 'Title:' + item.title;
    p.innerText = 'Month Duration:' + item.monthDuration
    block.append(h1, p);
    body.appendChild(block)
}
