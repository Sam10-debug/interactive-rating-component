const submit= document.querySelector(".submit")
const rating= document.querySelector('#rating')
const number1=document.querySelector('.n1')
const number2=document.querySelector('.n2')
const number3=document.querySelector('.n3')
const number4=document.querySelector('.n4')
const number5=document.querySelector('.n5')
const select= document.querySelector('.select')
const click1=()=>{
    rating.textContent=1
}
const click2=()=>{
    rating.textContent=2
}
const click3=()=>{
    rating.textContent=3
}
const click4=()=>{
    rating.textContent=4
}
const click5=()=>{
    rating.textContent=5
}
number1.addEventListener('click',click1)
number2.addEventListener('click',click2)
number3.addEventListener('click',click3)
number4.addEventListener('click',click4)
number5.addEventListener('click',click5)
const submitfunc=()=>{
    const style=document.createElement('style')
    style.innerHTML=`
    .container{
        display:none;
    }
    .second{
        display:block;
        background-color:  hsl(213, 19%, 18%);
        padding: 1.875rem;
        border-radius: .8rem;
        width: auto;
        height: auto;
        margin-bottom: 2.5rem;
        position:relative;
    }
    .third{
        display:flex;
        position:absolute;
        left:35%;
        top:5%;
    }
    .third > img{
        height:60px; 

    }
    .select{
        text-align:center;
        background-color:  hsl(213, 19%, 21%);
        margin-left: 25px;
        margin-right: 25px;
        border-radius: .8rem;
        color:hsl(25, 97%, 53%);
        padding:7px;
        margin-bottom:20px;
        margin-top:3.75rem;
    }
    .thank{
        text-align:center;
        font-size:1.4rem;
        color:white;
        margin-bottom:15px;
        
    }
    .textt{
        color: hsl(217, 12%, 63%);
        text-align:center;
    }
    `
    document.head.appendChild(style)
}
submit.addEventListener('click',submitfunc)