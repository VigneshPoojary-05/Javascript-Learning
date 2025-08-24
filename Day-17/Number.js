let num =  156324n;
console.log(typeof num,num)

let num1 = new Number(635)
console.log(typeof num1, num1)

let a = 1/0;
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.EPSILON)
console.log(Number.isNaN(a))

let nbr = "123.489";
let check = Number.parseInt(nbr)
console.log(typeof check,check)


let v =5
console.log(Number.isFinite(v))

let n = 456.25546546;
console.log(n.toFixed(7))
console.log(n.toExponential(8))
console.log(n.toPrecision(4))