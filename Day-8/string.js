let firstName = "Vignesh";
let secondName = "Poojary";

console.log(firstName)
console.log(secondName)
console.log(`My Name is ${firstName} ${secondName}`)
console.log("My name is " +firstName+ " " +secondName)

let a = "abc" + 23 + "xyz"
console.log(a)
let b = "HEllo" + " " + a;
console.log(b)

console.log(`This String Example with Backyard symoble - ${firstName} ${secondName} ${a} ${b}`)

let str1 = "Vignesh"
console.log(str1)

let str2 = new String("vignesh")
console.log(str2)

let escapeSeq = "Hello!!,\nhow are you? \"Bro\""
console.log(escapeSeq, escapeSeq.length)

let str="vignesh"
console.log(str[1],str[6],str[12])
str[0]="b";
console.log(str)

for(let ch in str){
    console.log(ch)
}

for(let ch of str){
        console.log(ch)
}

let str2=""
for(let ch of str){
    str2+=ch+"   ";
}
console.log(str2);