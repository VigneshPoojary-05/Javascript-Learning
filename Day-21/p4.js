let arr = [1,2,3,4]

function square(arr){
    let opArr = []
    for(let i=0; i<arr.length; i++){
        opArr.push(arr[i]*arr[i]*arr[i])
    }
    return opArr
}
let res = square(arr)
console.log(res)