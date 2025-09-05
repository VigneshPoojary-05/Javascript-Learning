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


class BankAc{
    #Balance=100;
    constructor(holderName, Balance=100){
        this.holderName=holderName;
        this.#Balance=Balance
    }
    deposite(Balance){
        this.#Balance+=Balance
    }
}
let vigAc = new BankAc('Vignesh', 5000);
console.log(vigAc)
vigAc.deposite(1000)
console.log(vigAc)
vigAc.Balance = 10000;
console.log(vigAc)