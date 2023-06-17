const meterbtn=document.getElementById('meter')
const feetbtn=document.getElementById('feet')
const input=document.getElementById('input')
let output=document.getElementById('output')

meterbtn.addEventListener('click',()=>{
    output.value=(input.value /3.281).toFixed(2) + ' '+'m'
})
feetbtn.addEventListener('click',()=>{
    output.value=(input.value*3.281).toFixed(2) +' ' +'Feet'
})