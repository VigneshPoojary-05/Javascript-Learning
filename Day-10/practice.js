let  arr = [5,10,15,56];
let sum = arr.reduce((a,b)=>{
    return a+b
},1)
let avg = sum/arr.length;
console.log(`Sum = ${sum} and average = ${avg}`);


// let n = Number(prompt("Enter the Array Size"))
// let newArray = new Array(n).fill(0);
// console.log(newArray);


let n = Number(prompt("Enter the Array Size"))
let newArray = new Array(n).fill(0);
newArray.forEach((item,index)=>{
    newArray[index]=index+1
})
console.log(newArray);


 let heros = ["Ironman","Captain","black widow","wanda","hulk","black panther"]
heros.push("spiderman")
heros.unshift("Thor")
console.log(heros)
heros.splice(3,1,"hawkeye")
console.log(heros)
console.log(heros.includes("Captain"))


let test = "56";
console.log(Array.isArray(test))
console.log(Array.isArray(heros))
console.log(Array.from(test))

let a = 5;
let b ="vignesh"
let c ={name:"vignesh"}
let d = ["apple",78,"mango","banana",25,]

console.log(Array.of(a))
console.log(Array.of(b))
console.log(Array.of(c))
console.log(Array.of(d))

let str = "Hello"
let convert = Array.from(str).reverse().join("")
console.log(convert)

let str2 = [1,2,3,5]
console.log(str2.reverse())

let word = "heelo how are you budy!"
let newWord = word.split(" ").map((elem)=>{
    return elem.charAt(0).toUpperCase()+elem.slice(1)
})
console.log(newWord.join(" "))