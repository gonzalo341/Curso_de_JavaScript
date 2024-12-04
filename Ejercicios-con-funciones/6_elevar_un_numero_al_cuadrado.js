//elevar un numero al cuadrado
const prompt = require("prompt-sync")()

const numero = parseInt(prompt("ingrese el numero "))

function cuadrado(numero){
    return numero * numero 
}

let resultado = cuadrado(numero)

console.log(resultado)