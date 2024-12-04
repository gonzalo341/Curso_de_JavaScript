//comprobar si un numero es primo
const prompt = require("prompt-sync")()

let numero = parseInt(prompt("ingrese el numero "))
let contador = 2
let divisible = []

function primo(numero){
    while (contador < numero) {
        if (numero %contador=== 0) {
                divisible.push(contador)
            }
        contador++
    }
    contador = 2
    while (contador < numero) {
        if (numero %contador=== 0) {
            return numero + " Es un numero compuesto"
        }
        contador++
    }
    return numero + " Es un numero primo"
}

let tipo_de_numero = primo(numero)

console.log("Es divisible por " + divisible)
console.log(tipo_de_numero)