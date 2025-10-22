 document.getElementById('GenerateButtonArray').addEventListener('click', function() {
            let ArrayNumber = Array(5).fill(0);
            let count = 0;
            let sum = 0;
            let divisibleElements = [];

            for (let i = 0; i < ArrayNumber.length; i++) {
                ArrayNumber[i] = Math.floor(Math.random() * 100);
                if (ArrayNumber[i] % 3 === 0) {
                    count++;
                    sum += ArrayNumber[i];
                    divisibleElements.push(ArrayNumber[i]);
                }
            }

            document.getElementById('Output').value = ArrayNumber.join(', ');
            
            const resultContainer = document.getElementById('resultContainer');
            resultContainer.innerHTML = '';
            
            const paragraph = document.createElement('p');
            paragraph.className = 'result-item';
            paragraph.textContent = `Сумма = ${sum}, Количество = ${count}`;
            resultContainer.appendChild(paragraph);
        });