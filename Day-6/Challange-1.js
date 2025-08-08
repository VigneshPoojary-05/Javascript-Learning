let num1 = 100;
let num2 = 5;
let num3 = 3;

if(num1<num2 && num1<num3){
    console.log(`${num1} is smallest`)
} else if(num2<num1 && num2<num3){
    console.log(`${num2} is smallest`)
} else if (num3<num1 && num3<num2){
    console.log(`${num3} is smallest`)
} else {
    console.log("Invalid Numbers");
}

let res = (num1<num2 && num1<num3) ? (`${num1} is smallest`) : ((num2<num1 && num2<num3) ? (`${num2} is smallest`) : ((num3<num1 && num3<num2) ? (`${num3} is smallest`) : ("Invalid Numbers")));
console.log(res)