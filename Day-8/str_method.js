// Convert lowerCase to upperCase
let upperCase = "vignesh"
console.log(upperCase ,upperCase.toUpperCase());

// Convert upperCase to lowerCase
let lowerCase="VIGNESH POOJARY"
console.log(lowerCase.toLocaleLowerCase())

//Remove white Space from left and right 
let trim = "                 Vignesh poojary";
console.log(trim.trim())
console.log(trim)

// Concatinate
let firstName = " Vignesh"
let lastName = "Poojary"
let fullName = firstName + " " + lastName
console.log(fullName)

console.log(lastName.concat(firstName))

//Includes method
let subject = "MERN Stack"
let check = subject.includes("Node");
console.log(check)

console.log(subject.indexOf("N"))

console.log(subject.charAt(5))

console.log(subject.replace("MERN","MEAN"))

let userName = "@vignesh123poojary"
console.log(userName.slice(1,8));
console.log(userName.slice(-15,8));

let split = "abc def ghi jkl"
console.log(split.split(""))
console.log(split.split(" "))

let str = "Hello Brother"
console.log(str)
str = str.replace("Brother","Sister")
console.log(str)
console.log(str)