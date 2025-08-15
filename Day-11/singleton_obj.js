let person = {
    name:"Vignesh",
    age:19,
    place:"Kundapura"
}

let {age,name} = person
console.log(age,name)

console.log(typeof person === "object")
console.log(!Array.isArray(person))