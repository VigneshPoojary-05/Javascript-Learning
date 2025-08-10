// Function without parameter list and without return statement
let n=5;
let sum=0
function Myfunction(){
    for(let i=1; i<=n; i++){
    sum+=i
}
console.log(sum)
}
Myfunction(5);

// Function with parameter list and with return statement

function sum(a,b){
    return a*b;
}
console.log(sum(5,4))

// Function without parameter list and with return statement

function alpha(){
    return "vignesh"
}
console.log(alpha())

// Function with parameter list and without return statement

function addition(a,b){
    let sum=a+b;
    console.log(sum)
}
addition(5,3)
