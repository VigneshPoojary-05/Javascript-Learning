let name = "Vignesh";
let reverseName = name.split('').reverse().join('')
console.log(reverseName)

let add = num => num+2;
let mul = num => num*5;
let sub = num => num-10;

let res = sub(mul(add(4)))
console.log(res)

function compose(...fns){
    return function(val){
       return fns.reduceRight((acc, currFn)=>{
           return currFn(acc)
        },val)
    }
}
let result = compose(sub, mul, add)(6)
console.log(result)