const buttonLeft=document.querySelectorAll(".base")
const buttonsRight=document.querySelectorAll(".symbol")
const left=document.querySelector(".lefttext")
const right=document.querySelector(".righttext")
const firstRate=document.querySelector(".firstRate")
const secondRate=document.querySelector(".secondRate")
window.addEventListener("offline",()=>{
    alert("You are not connected to the network.")
})
buttonLeft.forEach(item=>item.addEventListener("click",(e)=>{
    const violet=document.querySelectorAll(".base.active")
    violet.forEach(item=>item.classList.remove("active"))
    e.target.classList.add("active")
    const base=e.target.innerText
    const symbol=document.querySelector(".symbol.active")
    fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbol.innerText}`)
    .then(res=>res.json())
    .then(res=>{const rate=res.rates[symbol.innerText]; 
        right.value = +left.value * +rate
        left.addEventListener("keyup",() =>{
            right.value = +left.value * +rate       
})
firstRate.innerText=`1 ${base}=${1/rate} ${symbol.innerText}`
}).catch(err=>alert(err))      
}))
document.querySelector(".rub.base.active").click()
buttonsRight.forEach(item=>item.addEventListener("click",(e)=>{
    const violets=document.querySelectorAll(".symbol.active")
    violets.forEach(item=>item.classList.remove("active"))
    e.target.classList.add("active")
    const symbol=e.target.innerText
    const base=document.querySelector(".base.active")
    fetch(`https://api.exchangerate.host/latest?base=${base.innerText}&symbols=${symbol}`)
    .then(res=>res.json())
    .then(res=>{const rate=res.rates[symbol]; 
        left.value = +right.value / +rate
        right.addEventListener("keyup",() =>{
            left.value = +right.value / +rate
        })
        secondRate.innerText=`1 ${symbol}=${1/rate} ${base.innerText}`
    })}))
document.querySelector(".usd.symbol.active").click()



