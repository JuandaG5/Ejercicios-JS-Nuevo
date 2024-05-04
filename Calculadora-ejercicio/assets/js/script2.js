//Opciones
let long=document.querySelector("#long")
let upper=document.querySelector("#upper")
let lower=document.querySelector("#lower")
let first=document.querySelector("#first")

//Longitud
long.addEventListener("click", e=>{
    e.preventDefault()
    let string=(document.getElementById("string").value)


    console.log(`La longitud de la palabra es de ${string.length} caracteres de largo`)
})

//Conversión a mayúsculas
upper.addEventListener("click", e=>{
    e.preventDefault()
    let string=(document.getElementById("string").value)


    console.log(`La palabra en mayúsculas es "${string.toUpperCase()}"`)
})


//Conversión a minúsculas
lower.addEventListener("click", e=>{
    e.preventDefault()
    let string=(document.getElementById("string").value)


    console.log(`La palabra en minúsculas es "${string.toLowerCase()}"`)
})


//Imprimir primer carácter
first.addEventListener("click", e=>{
    e.preventDefault()
    let string=(document.getElementById("string").value)


    console.log(`El primer cáracter de la palabra es "${string.charAt(0)}"`)
})
