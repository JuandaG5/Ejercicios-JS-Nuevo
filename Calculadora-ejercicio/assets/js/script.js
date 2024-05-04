//Suma
let sumar=document.querySelector("#Sumar")
let resta=document.querySelector("#Resta")
let multiplicar=document.querySelector("#Multiplicar")
let division=document.querySelector("#Division")

sumar.addEventListener("click", e=>{
    e.preventDefault()
    let numero1=parseInt(document.getElementById("numero1").value)
    let numero2=parseInt(document.getElementById("numero2").value)

    let result=numero1+numero2
    console.log(`la suma de ${numero1} + ${numero2} es ${result}`)
})

resta.addEventListener("click", e=>{
    e.preventDefault()
    let numero1=parseInt(document.getElementById("numero1").value)
    let numero2=parseInt(document.getElementById("numero2").value)

    let result=numero1-numero2
    console.log(`la resta de ${numero1} - ${numero2} es ${result}`)
})

multiplicar.addEventListener("click", e=>{
    e.preventDefault()
    let numero1=parseInt(document.getElementById("numero1").value)
    let numero2=parseInt(document.getElementById("numero2").value)

    let result=numero1*numero2
    console.log(`la multiplicación de ${numero1} * ${numero2} es ${result}`)
})

division.addEventListener("click", e=>{
    e.preventDefault()
    let numero1=parseInt(document.getElementById("numero1").value)
    let numero2=parseInt(document.getElementById("numero2").value)

    let result=numero1/numero2
    console.log(`la división de ${numero1} / ${numero2} es ${result}`)
})