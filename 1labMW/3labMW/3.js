// 1.3.	Создать функцию, которая вернет: a. Среднее арифметическое своих аргументов b. Среднее гармоническое своих аргументов 
let arrAll = []; //Массив для а и b

for (let i = 0; i < 10; i++) {
    arrAll.push(Math.floor(Math.random()* 100));
}

function arithmeticMean() {
    let sum = 0;
    for (let i = 0; i < arrAll.length; i++) {
        sum += arrAll[i];
    }
    return sum / arrAll.length; // Возвращаем СРЕДНЕЕ арифметическое
}


function harmonicMean() {
    let sum = 0;
    for (let i = 0; i < arrAll.length; i++) {
        sum += 1 / arrAll[i];
    }
    return arrAll.length / sum; // Возвращаем СРЕДНЕЕ гармоническое
}


let arrArithmetic = []
let arrHarmonic = []

for (let i = 0; i < arrAll.length; i++) {
    arrArithmetic.push(arithmeticMean());
    arrHarmonic.push(harmonicMean());
}
const arithmetic = arithmeticMean(1);
const harmonic = harmonicMean(1);

let arrhar = [] 
let arrari = []
arrari.push(arithmetic);
arrhar.push(harmonic);

    

 const resultContainer = document.getElementById('resultContainer');
        
        const arrayText = document.createTextNode('СРЕДНЕЕ арифметическое: ' + arrari.join(', '));
        resultContainer.appendChild(arrayText);
        resultContainer.appendChild(document.createElement('br'));
        const arrayText2 = document.createTextNode('СРЕДНЕЕ гармоническое: ' + arrhar.join(', '));
        resultContainer.appendChild(arrayText2);
        resultContainer.appendChild(document.createElement('br'));
       
        