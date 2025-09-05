class Car{
    #fuel =100;

    burnFuel(){
        this.#fuel -= 1
    }

    start(){
        this.burnFuel();
        console.log('Car is starting....')
    }
}

let BMW = new Car();
BMW.start();
BMW.burnFuel()
BMW.burnFuel()
console.log(BMW)
BMW.#Fuel = 50
console.log(BMW)