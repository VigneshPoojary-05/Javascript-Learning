let obj1 = {
    name:"Vignesh",
    age:19,
    class:"III BCA-B",
};
console.log(obj1)


let car = {
    brand:"BMW",
    color:"red",
    speed:120,
    stop:()=>{
        console.log(`stoping with car`)
    },
    start:function(){
        console.log("Starting with car")
    }
}
car.city="udupi"
car.year=2015
console.log(car)


console.log(car["brand"])
car["start"]()

let person1={
    "full name":"Vignesh poojary"
}
let test="full name"
console.log(person1[test])

let person = new Object({
    name:"vignesh",
})
person.age=19;
person.place="Kundapura";
person.DOB="05-01-2006"
console.log(person)
person.name="vigesh poojary"
console.log(person)
delete person.place;
console.log(person)

let obj = {
    name:"vignesh",
    age:19,
    greet:function(){
        console.log(`My name is ${this.name} and age is ${this.age}`)
    }
}

obj.fun=function(){
    console.log(this)
}

obj.fun()
obj.greet();