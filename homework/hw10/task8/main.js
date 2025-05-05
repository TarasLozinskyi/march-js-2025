// #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
// При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.


const rows = document.getElementById('rows');
const cells = document.getElementById('cells');
const cellContent = document.getElementById('cell-content');
const btn = document.getElementsByClassName('btn')[0]
const body = document.body;
const createNewTable = (rows, cells, cellC)=>{
    const table = document.createElement('table');
    table.classList.add('table');
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        tr.classList.add('tr');
        for (let j = 0; j < cells; j++) {
            const td = document.createElement('td');
            td.innerText = cellC;
            td.classList.add('td');

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    body.appendChild(table)
}

btn.onclick = function (){
    createNewTable(rows.value, cells.value, cellContent.value)
    rows.value = '';
    cells.value = '';
    cellContent.value = '';
}

// я тут ще міг преревірки різні зробити, видаляти минулу таблицю, застилізувати краще але цього не було в задачі так що я умиваю руки


