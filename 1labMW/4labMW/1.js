// 8. Реализуйте класс Факультет, который хранит список студентов. Класс Студент содержит информацию 
// о студенте. Создайте классы-наследники для студентов отдельных специальностей.
//  В программе предусмотреть возможность вывода
//  всех студентов заданной специальности и поиска студента по фамилии.


class Student {
    constructor(lastName, firstName, patronymic, specialty) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.patronymic = patronymic;
        this.specialty = specialty;
    }
    
    getFullName() {
        return `${this.lastName} ${this.firstName} ${this.patronymic}`;
    }
    
    toString() {
        return `${this.getFullName()} (${this.specialty})`;
    }
}

// Классы-наследники для разных специальностей
class ComputerScienceStudent extends Student {
    constructor(lastName, firstName, patronymic) {
        super(lastName, firstName, patronymic, "Информатика");
    }
}

class MathematicsStudent extends Student {
    constructor(lastName, firstName, patronymic) {
        super(lastName, firstName, patronymic, "Математика");
    }
}

class PhysicsStudent extends Student {
    constructor(lastName, firstName, patronymic) {
        super(lastName, firstName, patronymic, "Физика");
    }
}

// Класс Факультет
class Faculty {
    constructor(name) {
        this.name = name;
        this.students = [];
    }
    
    // Добавление студента
    addStudent(student) {
        this.students.push(student);
    }
    
    // Вывод всех студентов заданной специальности
    getStudentsBySpecialty(specialty) {
        return this.students.filter(student => 
            student.specialty.toLowerCase() === specialty.toLowerCase()
        );
    }
    
    // Поиск студента по фамилии
    findStudentByLastName(lastName) {
        return this.students.filter(student =>
            student.lastName.toLowerCase().includes(lastName.toLowerCase())
        );
    }
    
    // Вывод всех студентов
    getAllStudents() {
        return this.students;
    }
}





