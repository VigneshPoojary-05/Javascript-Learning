console.log('HTML')
console.log('CSS')

for(let i=1; i<=400; i++){
    console.log('Task', i)
}

console.log('JS')
console.log('React')
console.log('Node')


console.log('First Task')
setTimeout(()=>{
    for(let i=1; i<=40; i++){
        console.log('Async Task',i)
    }
},5000)
console.log('Second Task')
console.log('Third Task')


setTimeout(()=>{
        console.log('HTML')
},5000)

setTimeout(()=>{
        console.log('CSS')
},2000)

setTimeout(()=>{
        console.log('js')
},9000)

setTimeout(()=>{
        console.log('node')
},6000)


