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
                super(lastName, firstName, patronymic, "ФАИС");
            }
        }

        class EnergeticStudent extends Student {
            constructor(lastName, firstName, patronymic) {
                super(lastName, firstName, patronymic, "ЭФ");
            }
        }

        class EconomicStudent extends Student {
            constructor(lastName, firstName, patronymic) {
                super(lastName, firstName, patronymic, "ГЭФ");
            }
        }

        // Класс Факультет
        class Faculty {
            constructor(name) {
                this.name = name;
                this.students = [];
            }
            
            addStudent(student) {
                this.students.push(student);
            }
            
            getStudentsBySpecialty(specialty) {
                return this.students.filter(student => 
                    student.specialty.toLowerCase() === specialty.toLowerCase()
                );
            }
            
            findStudentByLastName(lastName) {
                return this.students.filter(student =>
                    student.lastName.toLowerCase().includes(lastName.toLowerCase())
                );
            }
            
            getAllStudents() {
                return this.students;
            }
        }

        // Создаем факультет и заполняем данными
        const faculty = new Faculty("Факультет компьютерных наук");
        
        // Добавляем студентов из вашего списка
        faculty.addStudent(new ComputerScienceStudent("Петросян", "Иван", "Сергеевич"));
        faculty.addStudent(new EconomicStudent("Второй", "Петр", "Алексеевич"));
        faculty.addStudent(new EnergeticStudent("Потопим", "Николай", "Викторович"));
        faculty.addStudent(new ComputerScienceStudent("Кадет", "Василий", "Дмитриевич"));
        faculty.addStudent(new EconomicStudent("Иванова", "Екатерина", "Петровна"));
        faculty.addStudent(new EnergeticStudent("Смирнова", "Елена", "Алексеевна"));
        faculty.addStudent(new ComputerScienceStudent("Попов", "Александр", "Владимирович"));
        faculty.addStudent(new EconomicStudent("Кузнецова", "Мария", "Сергеевна"));
        faculty.addStudent(new EnergeticStudent("Волкова", "Елена", "Дмитриевна"));
        faculty.addStudent(new ComputerScienceStudent("Новикова", "Татьяна", "Андреевна"));

        // Функция для отображения студентов в HTML
        function displayStudents(students, title) {
            const container = document.getElementById('studentsContainer');
            const titleElement = document.getElementById('resultsTitle');
            
            titleElement.textContent = title;
            
            if (students.length === 0) {
                container.innerHTML = '<div class="no-results">Студенты не найдены</div>';
                return;
            }
            
            container.innerHTML = students.map(student => `
                <div class="student-card">
                    <div class="student-name">${student.getFullName()}</div>
                    <div class="student-specialty">
                        Специальность: ${student.specialty}
                    </div>
                </div>
            `).join('');
        }

        // Функции для обработки действий пользователя
        function searchStudents() {
            const lastName = document.getElementById('searchLastName').value.trim();
            if (!lastName) {
                alert("Введите фамилию студента для поиска.");
                return;
            }
            
            const foundStudents = faculty.findStudentByLastName(lastName);
            displayStudents(foundStudents, `Результаты поиска по фамилии: "${lastName}" (найдено: ${foundStudents.length})`);
        }

        function filterBySpecialty() {
            const specialty = document.getElementById('specialtyFilter').value;
            if (!specialty) {
                showAllStudents();
                return;
            }
            
            const filteredStudents = faculty.getStudentsBySpecialty(specialty);
            displayStudents(filteredStudents, `Студенты специальности: ${specialty} (найдено: ${filteredStudents.length})`);
        }

        function showAllStudents() {
            const allStudents = faculty.getAllStudents();
            displayStudents(allStudents, `Все студенты факультета (всего: ${allStudents.length})`);
        }