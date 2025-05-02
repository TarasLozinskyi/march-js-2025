// #OPLI89c9G
//
// – Є масив:
//
// ['Main', 'Products', 'About us', 'Contacts']
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


const arr = ['Main', 'Products', 'About us', 'Contacts'];
const ul = document.createElement('ul');
const body = document.body;

for (const liElement of arr) {
    const li = document.createElement('li');
    li.innerText = liElement;
    ul.appendChild(li);
}
body.appendChild(ul)
