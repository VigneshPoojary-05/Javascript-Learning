// Function Declaration(Normaal function)
function greet(){
    console.log("Good Morning")
}
greet();


// Function Expression
const greet=function(){
    console.log("hello bro!!")
}
greet()


// Arrow function
let a = ()=>{
    console.log("Hello!!!")
}
a()


// Anonymous Function
setTimeout(()=>{
    console.log(2*6);
},9000)


// Immediatly Invoked Function Expression
(()=>{
    console.log(2+2)
})();

//or

(function(){
    console.log(2+2)
})();