let btn = document.querySelector('.btn');
let modelContainer = document.querySelector('.modelContainer');
let closeBtn = document.querySelector('.closeBtn');

btn.addEventListener('click',()=>{
    modelContainer.style.display = 'flex'
})

closeBtn.addEventListener('click',()=>{
    modelContainer.style.display = 'none'

})

modelContainer.addEventListener('click',(e)=>{
    if(e.target.className === 'modelContainer'){
        modelContainer.style.display = 'none'
    }

})