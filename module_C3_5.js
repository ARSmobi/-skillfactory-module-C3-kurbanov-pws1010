class Device {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.turnedOn = false
    }

    turnOn() {
        this.turnedOn = true
    }

    turnOff() {
        this.turnedOn = false
    }

    consumption() {
        console.log(`${this.name} потребляет ${this.power} Ватт в час`)
    }
}

class Lamp extends Device{
    constructor(name, power) {
        super();
        this.name = name;
        this.power = power
    }
}

class Iron extends Device{
    constructor(name, power) {
        super();
        this.name = name;
        this.power = power
    }
}

class TV extends Device{
    constructor(name, power) {
        super();
        this.name = name;
        this.power = power
    }
}

function calcTotalConsumption(devices) {
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
littleIron.turnOn()
smartTV.turnOn()

let totalConsumption = calcTotalConsumption(devices)

console.log(`Включенные приборы: ${totalConsumption[1]}`)
console.log(`Общее потребление электроэнергии всех приборов ${totalConsumption[0]} Ватт в час`)
