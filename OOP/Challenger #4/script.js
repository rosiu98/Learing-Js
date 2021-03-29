'use strict'

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed
    }

    breake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed}km/h`)
        return this;
    }
}

class EV extends Car {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed)
        this.#charge = charge
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20
        this.#charge--
        console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.#charge}%`)
        return this;
    }
}

const rivian = new EV('Rivian', 120, 23)

console.log(rivian);

rivian.breake().accelerate().accelerate().accelerate().chargeBattery(90).accelerate();
