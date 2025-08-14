let arr1 = [9,2,5,"hi",5,8]
console.log(arr1)

console.log(arr1,arr1.push(10,52))
console.log(arr1,arr1.pop());
console.log(arr1,arr1.unshift(13))
console.log(arr1,arr1.shift());
console.log(arr1.slice(-5,5)); console.log(arr1)
console.log(arr1.splice(3,3,55,56,78),arr1)
console.log(arr1.splice(3,0,55,56,78),arr1)
let arr2 = [5,6,89];
let arr3 = ["mn",489,"hkl"]
console.log(arr1.concat(arr2,arr3))
console.log(arr1)
let newArr = [...arr1, ...arr2, ...arr3]  //Spread Operator
console.log(newArr)
console.log(arr1.includes("hi"))
console.log(arr1.indexOf("hi"))
console.log(arr1.reverse()); console.log(arr1)
console.log(arr1.sort()); console.log(arr1);
let find = arr1.find(function(item){
  return item === 8;
})
console.log(find)

let arr = [10,5,1,20];
console.log(arr.sort((a,b)=>{
    console.log(a,b)
    return a-b
}));

map() 

let array = [1,2,5,9,10];

let newArray = array.map((elem, index)=>{
    console.log(elem,index)
    return elem*2;
})
console.log(array)
console.log(newArray)

let newArray1 = array.forEach((elem, index)=>{
    console.log(elem*2)
    array[index] = elem*2
})
console.log(array)
console.log(newArray1)

let fltr = [2,1,5,7,8,10]

let newFilter = fltr.filter((a, b)=>{
    return a%2 === 0;
    
})
console.log(newFilter)
console.log(fltr)

let reduceArr = [2,6,8,3,4]

let newReduceArr = reduceArr.reduce((prev,cur)=>{
    console.log(prev,cur)
    return prev+cur
},1)
console.log(newReduceArr)