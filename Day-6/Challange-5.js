// for(let i=0; i<=100; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

let str="hEe lOfb ebuhr opwu iyfuo ehebhi  oUu";
let vowelCount=0;
let consonentCount=0;

for(let ch of str){
    if(ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u' || ch==='A' || ch==='E' || ch==='I' || ch==='O' || ch==='U'){
        vowelCount++;
    }else{
        consonentCount++
    }
}
console.log(`Vowel Count : ${vowelCount}`)
console.log(`Consonent Count : ${consonentCount}`)