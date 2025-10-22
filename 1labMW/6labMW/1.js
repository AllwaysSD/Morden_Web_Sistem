function MouseConstructor(connectionInterface, purpose, sensorType, sensorModel, maxDPI) {
    this._connectionInterface = connectionInterface;
    this._purpose = purpose;
    this._sensorType = sensorType;
    this._sensorModel = sensorModel;
    this._maxDPI = maxDPI;
}

MouseConstructor.prototype.getConnectionInterface = function() {
    return this._connectionInterface;
};

MouseConstructor.prototype.setConnectionInterface = function(value) {
    this._connectionInterface = value;
};

MouseConstructor.prototype.getPurpose = function() {
    return this._purpose;
};

MouseConstructor.prototype.setPurpose = function(value) {
    this._purpose = value;
};

MouseConstructor.prototype.getSensorType = function() {
    return this._sensorType;
};

MouseConstructor.prototype.setSensorType = function(value) {
    this._sensorType = value;
};

MouseConstructor.prototype.getSensorModel = function() {
    return this._sensorModel;
};

MouseConstructor.prototype.setSensorModel = function(value) {
    this._sensorModel = value;
};

MouseConstructor.prototype.getMaxDPI = function() {
    return this._maxDPI;
};

MouseConstructor.prototype.setMaxDPI = function(value) {
    if (value > 0) this._maxDPI = value;
};

MouseConstructor.prototype.releaseDate = "Не указана";

const connectionInterfaces = ["USB", "Bluetooth", "USB-C", "Wireless 2.4GHz"];
const purposes = ["Офисная", "Гейминг", "Дизайнерская", "Универсальная"];
const sensorTypes = ["Оптический", "Лазерный", "Оптико-лазерный"];
const sensorModels = ["PMW3360", "PMW3389", "Hero", "TrueMove", "Avago"];

class Mouse {
    constructor(connectionInterface, purpose, sensorType, sensorModel, maxDPI) {
        this._connectionInterface = connectionInterface;
        this._purpose = purpose;
        this._sensorType = sensorType;
        this._sensorModel = sensorModel;
        this._maxDPI = maxDPI;
    }

    get connectionInterface() { return this._connectionInterface; }
    get purpose() { return this._purpose; }
    get sensorType() { return this._sensorType; }
    get sensorModel() { return this._sensorModel; }
    get maxDPI() { return this._maxDPI; }

    set connectionInterface(value) { this._connectionInterface = value; }
    set purpose(value) { this._purpose = value; }
    set sensorType(value) { this._sensorType = value; }
    set sensorModel(value) { this._sensorModel = value; }
    set maxDPI(value) { if (value > 0) this._maxDPI = value; }

    displayInfo() {
        return `<b>Интерфейс:</b> ${this.connectionInterface}, <b>Назначение:</b> ${this.purpose}, <b>Тип сенсора:</b> ${this.sensorType}, <b>Модель сенсора:</b> ${this.sensorModel}, <b>DPI:</b> ${this.maxDPI}`;
    }
}

class MouseCommercial extends Mouse {
    constructor(connectionInterface, purpose, sensorType, sensorModel, maxDPI, date, price) {
        super(connectionInterface, purpose, sensorType, sensorModel, maxDPI);
        this._date = date;
        this._price = price;
    }

    get date() { return this._date; }
    get price() { return this._price; }
    set date(value) { this._date = value; }
    set price(value) { if (value > 0) this._price = value; }

    getMouseInfo() {
        return `<b>Интерфейс:</b> ${this.connectionInterface}, <b>Назначение:</b> ${this.purpose}, <b>Тип сенсора:</b> ${this.sensorType}, <b>Модель сенсора:</b> ${this.sensorModel}, <b>DPI:</b> ${this.maxDPI}, <b>Дата выхода:</b> ${this.date}, <b>Цена:</b> ${this.price} руб.`;
    }
}

let mice = []

function createRandomMouse() {
    const connectionInterface = connectionInterfaces[Math.floor(Math.random() * connectionInterfaces.length)];
    const purpose = purposes[Math.floor(Math.random() * purposes.length)];
    const sensorType = sensorTypes[Math.floor(Math.random() * sensorTypes.length)];
    const sensorModel = sensorModels[Math.floor(Math.random() * sensorModels.length)];
    const maxDPI = Math.floor(Math.random() * 20) * 1000 + 1000;
    const date = `${Math.floor(Math.random() * 5) + 2020}-${(1 + Math.floor(Math.random() * 12)).toString().padStart(2, '0')}-${(Math.floor(Math.random() * 28) + 1).toString().padStart(2, '0')}`;
    const price = Math.floor(Math.random() * 20000) + 1000;
    
    return new MouseCommercial(connectionInterface, purpose, sensorType, sensorModel, maxDPI, date, price);
}

function initializeMice() {
    mice = [];
    for(let i = 0; i < 10; i++) {
        mice.push(createRandomMouse());
    }
}

mouseArray = [];

function CreateTable(objects) {
    let table = document.createElement('table');
    table.border = "1px solid black";
    table.style.width = "100%";
    
    let headerRow = table.insertRow();
    let headers = ["Назначение", "Модель сенсора", "Тип сенсора", "Max DPI", "Дата" , "Цена"];
    
    headers.forEach(headerText => {
        let th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    
    for(let i = 0; i < objects.length; i++) {
        let row = table.insertRow();
        let td1 = row.insertCell(0);
        let td2 = row.insertCell(1);
        let td3 = row.insertCell(2);
        let td4 = row.insertCell(3);
        let td5 = row.insertCell(4);
        let td6 = row.insertCell(5);
        
        td1.textContent = objects[i].purpose;
        td2.textContent = objects[i].sensorModel;
        td3.textContent = objects[i].sensorType;
        td4.textContent = objects[i].maxDPI;
        td5.textContent = objects[i].date;
        td6.textContent = objects[i].price + " руб.";
    }
    
    return table;
}

function First() {
    let table = CreateTable(mice);
    document.body.appendChild(table);
}

document.addEventListener('DOMContentLoaded', () => {
    initializeMice();
    First();
});