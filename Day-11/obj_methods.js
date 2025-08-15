let person = {
    name:"vignesh",
    age:19,
    place:"Kundapura"
}
console.log(person)
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

for(let test in person){
    console.log(`${test} : ${person[test]}`)
}

let person1={}
console.log(Object.assign(person1,person))

let person2 = {...person}
console.log(person2)

Object.freeze(person);
person.DOB="05-01-2006"

Object.seal(person)
person.city="udupi"
person.name="Vignesh Poojary"

console.log(person.hasOwnProperty("name"))