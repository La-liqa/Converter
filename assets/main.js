const buttonsleft=document.querySelectorAll(".base")
const buttonsright=document.querySelectorAll(".symbol")
const left=document.querySelector(".lefttext")
const right=document.querySelector(".righttext")
const firstRate=document.querySelector(".firstRate")
const secondRate=document.querySelector(".secondRate")

buttonsleft.forEach(item=>item.addEventListener("click",(e)=>{
    const violet=document.querySelectorAll(".base.active")
    violet.forEach(item=>item.classList.remove("active"))
    e.target.classList.add("active")
    const base=e.target.innerText
    const symbol=document.querySelector(".symbol.active")
    fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbol.innerText}`)
    .then(res=>res.json())
    .then(res=>{const rate=res.rates[symbol.innerText]; 
        left.addEventListener("keyup",() =>{
            right.value = +left.value * +rate
            
})
right.addEventListener("keyup",() =>{
    left.value = +right.value / +rate
})
firstRate.innerText=`1 ${base}=${rate} ${symbol.innerText}`
secondRate.innerText=`1 ${symbol.innerText}=${1/+rate} ${base}`
}).catch(err=>alert(err))
       
}))

buttonsright.forEach(item=>item.addEventListener("click",(e)=>{
    const violet=document.querySelectorAll(".symbol.active")
    violet.forEach(item=>item.classList.remove("active"))
    e.target.classList.add("active")
    const base=e.target.innerText
    const symbol=document.querySelector(".symbol.active")
}))



