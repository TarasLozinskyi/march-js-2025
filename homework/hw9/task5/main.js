// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
//
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом

let coursesArray = [{
    title: 'JavaScript Complex',
    monthDuration: 5,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
}, {
    title: 'Java Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
}, {
    title: 'Python Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
}, {
    title: 'QA Complex', monthDuration: 4, hourDuration: 909, modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
}, {
    title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
}, {
    title: 'Frontend',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
}];


const coursers = document.createElement('div');
coursers.classList.add('coursers')
const body = document.body;

for (const courseItem of coursesArray) {
    const course = document.createElement('div');
    course.classList.add('course')
    const title = document.createElement('h2');
    title.classList.add('title')
    const mouth = document.createElement('span');
    mouth.classList.add('mouth')
    const hour = document.createElement('span');
    hour.classList.add('hour')
    const list = document.createElement('ul')
    list.classList.add('list')

    title.innerText = courseItem.title;
    mouth.innerText = 'Month Duration: ' + courseItem.monthDuration;
    hour.innerText = 'Hour Duration: ' + courseItem.hourDuration;
    for (const item of courseItem.modules) {
        const listItem = document.createElement('li');
        listItem.classList.add('listItem')
        listItem.innerText = '- ' + item.toUpperCase();

        list.append(listItem);
    }
    course.append(title, mouth, hour, list)
    coursers.appendChild(course);
}


body.appendChild(coursers);

