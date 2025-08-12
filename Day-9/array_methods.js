// PUSH() method changes the original array by adding one or more elements to the end of the array and returns the new length of the array.
// It can take multiple arguments, each of which will be added to the end of the array
// It is a mutating method, meaning it changes the original array.
// It returns the new length of the array after the elements have been added.
// Example:
let arr1 = [2,5,"hi",5,8]
console.log(arr1) // [2, 5, "hi", 5, 8, 10]
console.log(arr1.push(10))
console.log(arr1) // [2, 5, "hi", 5, 8, 10]


// POP() method removes the last element from an array and returns that element.
// It changes the length of the array.
// If the array is empty, it returns undefined.
// Example:
console.log(arr1.pop()); // 10
console.log(arr1); // [2, 5, "hi", 5, 8]

