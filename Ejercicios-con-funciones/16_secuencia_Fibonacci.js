//secuencia Fibonacci
const prompt = require(`prompt-sync`)()

let secuenciaFibonacci = []
let contador = parseInt(prompt(`ingrese el numero `))/2 - 1
let primerNumero = 0
let segundoNumero = 1

function fibonacci(secuenciaFibonacci){
    while (contador >= 0) {
        secuenciaFibonacci.push(primerNumero)
        primerNumero = primerNumero + segundoNumero
        secuenciaFibonacci.push(segundoNumero)
        segundoNumero = primerNumero + segundoNumero
        contador --
    }
}

let resultado = fibonacci(secuenciaFibonacci)

console.log(secuenciaFibonacci)