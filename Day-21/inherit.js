class Car{
    constructor(brand, color){
        this.brand=brand;
        this.color=color;
    }
    start(){
        console.log(`${this.brand} is Strating....`)
    }
    stop(){
        console.log(`${this.brand} is Stoping....`)
    }
}

class EVCar extends Car{
    charge(){
        console.log(`${this.brand} is charging....`)
    }
}
let tesla = new EVCar('Tesla','black');
console.log(tesla)
tesla.charge()
tesla.start()
tesla.stop()