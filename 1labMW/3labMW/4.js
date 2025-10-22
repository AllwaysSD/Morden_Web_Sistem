// 1.4.	Создать массив из списка имен. Сгенерировать массив из 20 объектов типа «Человек». У каждого объекта
//  должно быть случайным образом выбрано имя, возраст, а также метод, который выводит имя и возраст данного человека. Прогнать методом обхода
//  по этому массиву и заставить каждого человека представиться.


let arr = ['Иван', 'Петр', 'Коля', 'Вася', 'Катя', 'Лена', 'Саша', 'Маша', 'Лена', 'Таня',
     'Стас', 'Стася', 'Андрей', 'Дмитрий', 'Михаил', 'Никита','Вильгельм','Сергей','Алина' ];

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Меня зовут ${this.name}, мне ${this.age} лет.`);
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

}

let people = [];
for (let i = 0; i < 20; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let name = arr[randomIndex];
    let age = Math.floor(Math.random() * 90) + 1;
    let person = new Person(name, age);
    people.push(person);
}
for (let person of people) {
    person.introduce();
}

const resultContainer = document.getElementById('resultContainer');


for (let person of people) {
    const personInfo = document.createTextNode(
        `Меня зовут: ${person.getName()}, мне ${person.getAge()} лет`
    );
    resultContainer.appendChild(personInfo);                                // Выводим информацию о каждом человеке
    resultContainer.appendChild(document.createElement('br'));
}
