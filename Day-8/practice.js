let fullName = prompt("Enter you Fullname")
let userName = `@${fullName.toLowerCase().trim().replaceAll(" ","")}_${fullName.length}`
console.log(userName)

let str = prompt("Enter the String") 
let ch = prompt("Enter any character") 
let count = 0;

for(let val of str){
    if(val.toLowerCase() === ch.toLowerCase()){
        count++
    }
}
console.log(count)

for(let index in str){
    if(str[index].toLowerCase() === ch.toLowerCase()){
        count++
        console.log(`Occurence Position = ${index}`)
    }
}
console.log(`Count = ${count} `)