// Задание 3: Класс для объекта "Мышь"
class Mouse {
    // Конструктор с параметрами
    constructor(connectionInterface, purpose, sensorType, sensorModel, maxDPI, releaseDate) {
        this._connectionInterface = connectionInterface;
        this._purpose = purpose;
        this._sensorType = sensorType;
        this._sensorModel = sensorModel;
        this._maxDPI = maxDPI;
        this._releaseDate = releaseDate || new Date().toLocaleDateString();
    }

    // ГЕТТЕРЫ
    get connectionInterface() {
        return this._connectionInterface;
    }

    get purpose() {
        return this._purpose;
    }

    get sensorType() {
        return this._sensorType;
    }

    get sensorModel() {
        return this._sensorModel;
    }

    get maxDPI() {
        return this._maxDPI;
    }

    get releaseDate() {
        return this._releaseDate;
    }

    // СЕТТЕРЫ
    set connectionInterface(value) {
        if (value && value.trim() !== '') {
            this._connectionInterface = value;
        } else {
            console.error("Интерфейс подключения не может быть пустым");
        }
    }

    set purpose(value) {
        if (value && value.trim() !== '') {
            this._purpose = value;
        } else {
            console.error("Назначение не может быть пустым");
        }
    }

    set sensorType(value) {
        if (value && value.trim() !== '') {
            this._sensorType = value;
        } else {
            console.error("Тип сенсора не может быть пустым");
        }
    }

    set sensorModel(value) {
        if (value && value.trim() !== '') {
            this._sensorModel = value;
        } else {
            console.error("Модель сенсора не может быть пустой");
        }
    }

    set maxDPI(value) {
        const dpi = Number(value);
        if (!isNaN(dpi) && dpi > 0) {
            this._maxDPI = dpi;
        } else {
            console.error("DPI должен быть положительным числом");
        }
    }

    set releaseDate(value) {
        if (value && value.trim() !== '') {
            this._releaseDate = value;
        } else {
            console.error("Дата выхода не может быть пустой");
        }
    }

    // Метод отображения информации об объекте
    displayInfo() {
        const resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = '';
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'mouse-class-info';
        
        infoDiv.innerHTML = `
            <h3>Информация о мыши (Класс):</h3>
            <p><strong>Интерфейс подключения:</strong> ${this._connectionInterface}</p>
            <p><strong>Назначение:</strong> ${this._purpose}</p>
            <p><strong>Тип сенсора:</strong> ${this._sensorType}</p>
            <p><strong>Модель сенсора:</strong> ${this._sensorModel}</p>
            <p><strong>Максимальное разрешение сенсора:</strong> ${this._maxDPI} DPI</p>
            <p><strong>Дата выхода на рынок:</strong> ${this._releaseDate}</p>
        `;
        
        resultContainer.appendChild(infoDiv);
    }

    // Дополнительный метод для демонстрации работы геттеров/сеттеров
    demonstrateAccessors() {
        const demoDiv = document.createElement('div');
        demoDiv.className = 'demo-info';
        demoDiv.innerHTML = `
            <h4>Демонстрация работы геттеров:</h4>
            <p>Текущий интерфейс: ${this.connectionInterface}</p>
            <p>Текущий DPI: ${this.maxDPI}</p>
        `;
        document.getElementById('resultContainer').appendChild(demoDiv);
    }
}

// Функция для создания и отображения мыши через класс
function displayClassMouseInfo() {
    // Получаем значения из полей ввода
    const interfaceValue = document.getElementById('interfaceInput').value || "USB";
    const purposeValue = document.getElementById('purposeInput').value || "Универсальная";
    const sensorTypeValue = document.getElementById('sensorTypeInput').value || "Оптический";
    const sensorModelValue = document.getElementById('sensorModelInput').value || "Standard";
    const maxDPIValue = document.getElementById('maxDPIInput').value || 1600;
    const dateValue = document.getElementById('dateOfCreationInput').value || new Date().toLocaleDateString();

    // Создаем экземпляр класса
    const classMouse = new Mouse(
        interfaceValue,
        purposeValue,
        sensorTypeValue,
        sensorModelValue,
        parseInt(maxDPIValue),
        dateValue
    );

    // Отображаем информацию
    classMouse.displayInfo();
    
    // Демонстрируем работу геттеров
    classMouse.demonstrateAccessors();
    
    // Демонстрация работы сеттеров
    const demoUpdate = document.createElement('div');
    demoUpdate.className = 'demo-update';
    demoUpdate.innerHTML = `
        <h4>Демонстрация работы сеттеров:</h4>
        <p>Изменим DPI на 24000 и назначение на "Гейминг"</p>
    `;
    document.getElementById('resultContainer').appendChild(demoUpdate);
    
    // Применяем сеттеры
    classMouse.maxDPI = 24000;
    classMouse.purpose = "Гейминг";
    
    // Показываем обновленные данные
    const updatedInfo = document.createElement('div');
    updatedInfo.className = 'updated-info';
    updatedInfo.innerHTML = `
        <p><strong>После изменений:</strong></p>
        <p>Назначение: ${classMouse.purpose}</p>
        <p>DPI: ${classMouse.maxDPI}</p>
    `;
    document.getElementById('resultContainer').appendChild(updatedInfo);
}