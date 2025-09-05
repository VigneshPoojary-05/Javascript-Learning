let arr = [5,3,8,9,-5,4,6];

let sum = arr.reduce((acc, curr)=>{
    console.log(`${acc} + ${curr} = ${acc+curr}`)
    return acc+curr;
    
},0)