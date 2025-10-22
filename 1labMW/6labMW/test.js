let table = document.createElement('table');
            let row = table.insertRow(0); // добавим строку

            let cell1 = row.insertCell(0); // добавим ячейки
            let cell2 = row.insertCell(1);

            cell1.innerHTML = 'Текст ячейки 1'; // вставим текст
            cell2.innerHTML = 'Текст ячейки 2';
            

            document.body.appendChild(table);