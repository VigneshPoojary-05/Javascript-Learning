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

let sanitise = str => str.replace(/[^a-z0-9 ]/gi, "") 
let trim = str => str.trim();
let capitalise = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

let input = "  vignesh@2003^kl &*";

let clean = capitalise(trim(sanitise(input)))
console.log(clean)

function compose(...fns){
    return function(val){
        return fns.reduceRight((acc, curFn)=>{
            return curFn(acc)
        },val)
    }
}
let com = compose(capitalise, trim, sanitise)
console.log(com(input))

