// Imperative programming
// let arr = [1,2,3,4,5]
// let double = [];

// for(let i=0; i<arr.length; i++){
//     double.push(arr[i]*2)
// }
// console.log(arr)
// console.log(double)

// Declarative programming
// let arr1 = [1,2,3,4,5]

// let double1 = arr1.map((elem)=>{
//     return (elem*2)
// })
// console.log(double1)


//Pure Functions
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(5,6))

// Immutability
// let obj = {
//     name:'Vignesh Poojary',
//     age:20
// }

// function replaceName(name){
//     let newObj = {...obj,name}
//     return newObj
// }
// let newRes = replaceName('naman');
// console.log(obj)
// console.log(newRes);

// let lists = ['HTML', 'CSS', 'JavaScript'];

// function addItem(item){
//     let newList = [...lists,item]
//     return newList
// }
// console.log(lists)
// let newLi = addItem('React')
// console.log(newLi)

// function removeItem(item){
//     let remItm = item.slice(0, -2)
//     return remItm
// }
// console.log(newLi)
// let rm = removeItem(newLi)
// console.log(rm)


function capFirstLetter(str){
    let newStr = str[0].toUpperCase() + str.slice(1);
    return newStr
}
let res = capFirstLetter('ghvignesh')
console.log(res)