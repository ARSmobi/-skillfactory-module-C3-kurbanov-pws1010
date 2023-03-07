function Device () {
    this.turnedOn = false
}

Device.prototype.turnOn = function () {this.turnedOn = true}
Device.prototype.turnOff = function () {this.turnedOn = false}

function  Lamp (name, power) {
    this.name = name;
    this.power = power
}

Lamp.prototype = new Device()

Lamp.prototype.consumption = function () {
    console.log(`${this.name} потребляет ${this.power} Ватт в час`)
}

function Iron (name, power) {
    this.name = name;
    this.power = power
}

Iron.prototype = new Device()

Iron.prototype.consumption = function () {
    console.log(`${this.name} потребляет ${this.power} Ватт в час`)
}

function TV (name, power) {
    this.name = name;
    this.power = power
}

TV.prototype = new Device()

TV.prototype.consumption = function (){
    console.log(`${this.name} потребляет ${this.power} Ватт в час`)
}

function calcTotalConsumption (devices) {
    let total = 0
    let names = []
    for (let device of devices) {
        if (device.turnedOn) {
            total += device.power
            names.push(device.name)
        }
    }
    return [total, names]
}

const devices = [
    tableLamp = new Lamp('Настольная лампа', 60),
    floorLamp = new Lamp('Торшер', 85),
    littleIron = new Iron('Маленький утюг', 1200),
    smartTV = new TV('Умный телевизор', 150)
]

tableLamp.turnOn()
floorLamp.turnOn()
smartTV.turnOn()

let totalConsumption = calcTotalConsumption(devices)

console.log(`Включенные приборы: ${totalConsumption[1]}`)
console.log(`Общее потребление электроэнергии всех приборов ${totalConsumption[0]} Ватт в час`)
