//calculadora simple
const prompt = require(`prompt-sync`)()

let a = parseInt(prompt(`ingrese el valor de a `))
let b = parseInt(prompt(`ingrese el valor de b `))
let operacion = prompt(`ingrese la operacion (+ , -, *, /) que va a realizar `)

function calculadora(a,b,operacion) {
    switch (operacion) {
        case `+`:
            return a + b
            break
        case `-`:
            return a - b
            break
        case `*`:
            return a * b
            break
        case `/`:
            return a / b
            break
    }
}

let resultado = calculadora(a,b,operacion)

console.log(resultado)