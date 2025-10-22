// 1.2.	Сгенерировать массив из 1000 случайных чисел в диапазоне s ± p%, отсортировать его по убыванию остатков от деления на 10. 
let s = 100;
let p = 10;

let arr = [];
let min = s * (1 - p / 100); // 90
let max = s * (1 + p / 100); // 110

for (let i = 0; i < 1000; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1) + min));
}

arr.sort((a, b) => (b % 10) - (a % 10));

 const resultContainer = document.getElementById('resultContainer');
        
        const arrayText = document.createTextNode('Массив: ' + arr.join(', '));
        resultContainer.appendChild(arrayText);
        resultContainer.appendChild(document.createElement('br'));
       