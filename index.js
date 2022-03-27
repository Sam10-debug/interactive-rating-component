const container= document.querySelector('.container')
const second= document.querySelector('.second')
const submit= document.querySelector('.submit')
const digits= document.querySelectorAll("#digits")
const select= document.querySelector('.select')
const arr=[]
digits.forEach(digit=>{
    digit.onclick=()=>{
    //  console.log(digit.getAttribute('data-value'))
    arr.push(digit.getAttribute('data-value'))
    select.innerHTML=`You selected ${digit.getAttribute('data-value')} out of 5`
    }
})
const submitfunc=()=>{

    if (arr.length!==0){
        container.classList.toggle("active")
        second.classList.toggle("active")
    }
}
submit.addEventListener('click',submitfunc)
