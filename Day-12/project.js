let para = document.querySelector('p');
let ONbtn = document.querySelector('button');
let OFFbtn = document.querySelector('.OFF-btn');

ONbtn.addEventListener('click',()=>{
    para.style.scale = "1"
});

OFFbtn.addEventListener('click',()=>{
    para.style.scale = "0.5"  
});

