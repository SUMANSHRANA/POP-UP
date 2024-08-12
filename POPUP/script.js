const get=document.querySelector(".get")
const popup=document.querySelector(".popup")
const center=document.querySelector(".center")
const cross=document.querySelector(".cross")
const subscribe=document.querySelector(".subscribe")
const input=document.querySelector("input")
const error=document.querySelector('.error')
const overlay=document.querySelector('.overlay')

get.addEventListener('click',()=>{
    popup.classList.add('add');
    center.classList.add('remove')
    overlay.classList.add('called')
})

cross.addEventListener('click',()=>{
    popup.classList.remove('add');
    center.classList.remove('remove')
    error.classList.remove('add')
    overlay.classList.remove('called')
})

subscribe.addEventListener('click',()=>{

    if(input.value){
    popup.classList.remove('add');
    center.classList.remove('remove');
    error.classList.remove('add')
    overlay.classList.remove('called')
    }
    else{
   error.classList.add('add')
    }
})
