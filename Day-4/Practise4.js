let x = 10;
let y = 5;
let z = "10";

x += y * 2;
let isEqual = x==z;
let isStrictlyEqual = x===z;
let logicTest = (isEqual || isStrictlyEqual) && !(y > 10)
let result = logicTest ? ++x : --y;




console.log("x : ",x);
console.log("isEqual : ",isEqual)
console.log("isStrictlyEqual : ",isStrictlyEqual)
console.log("Logic Test : ",logicTest)
console.log(result)