 function randomString(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        const result = randomString(5);

        let arr = [];
        let sum = 0;

        console.log(result);

        for (let i = 0; i < result.length; i++) {
            arr.push(result[i].toUpperCase().charCodeAt());
        }

        console.log(arr);

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 5 != 0) {
                sum += arr[i] % 5;
            }
        }

        const resultContainer = document.getElementById('resultContainer');
        
        const arrayText = document.createTextNode('Массив: ' + arr.join(', '));
        resultContainer.appendChild(arrayText);
        resultContainer.appendChild(document.createElement('br'));
        
        const sumText = document.createTextNode('Сумма остатков от деления на 5: ' + sum);
        resultContainer.appendChild(sumText);
        resultContainer.appendChild(document.createElement('br'));