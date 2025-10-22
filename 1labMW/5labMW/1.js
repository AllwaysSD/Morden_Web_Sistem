// В соответствии со своим вариантом определить объект, с 
// заданными полями и методом вывода информации об объекте. 
// Объект создается с помощью объектного литерала

// Вариант 8 Мышь 
//Интерфейс подключения, Назначене, Тип сенсора, Модель сенсора, Максимальное разрешение сенсора(DPI) 




        function displayMouseInfo() {
            let Mouse = {
                interface: document.getElementById('interfaceInput').value,
                Purpose: document.getElementById('assignInput').value,
                type: document.getElementById('typeInput').value,
                model: document.getElementById('modelInput').value,
            }

            const resultContainer = document.getElementById('resultContainer');
            resultContainer.innerHTML = '';

            const interfaceOutput = document.createTextNode('Интерфейс подключения : ' + Mouse.interface);
            resultContainer.appendChild(interfaceOutput);
            resultContainer.appendChild(document.createElement('br'));
            const PurposeOutput = document.createTextNode('Интерфейс подключения : ' + Mouse.Purpose);
            resultContainer.appendChild(PurposeOutput);
            resultContainer.appendChild(document.createElement('br'));
            const typeOutput = document.createTextNode('Интерфейс подключения : ' + Mouse.type);
            resultContainer.appendChild(typeOutput);
            resultContainer.appendChild(document.createElement('br'));
            const modelOutput = document.createTextNode('Интерфейс подключения : ' + Mouse.model);
            resultContainer.appendChild(modelOutput);
            resultContainer.appendChild(document.createElement('br'));
        }   