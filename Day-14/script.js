// Method-1 Using setAttribute
let div = document.querySelector('div');
div.setAttribute('class','redBG');
div.setAttribute('style','font-size:50px');


// Method-2 Using Style Property
div.style.backgroundColor="red";
div.style.fontSize="40px";


// Method-3 Using cssText Property
div.style.cssText='background-color:yellow; font-size:40px;'


// Method-4 Using className Property
div.className='redBG';

// Method-5 Using classList Property
div.classList.add('redBG')
div.classList.add('blueBG')

div.classList.remove('blueBG')

console.log(div.classList.contains('blueBG'))

div.classList.toggle('blueBG')
div.classList.toggle('blueBG')
console.log(div.className)