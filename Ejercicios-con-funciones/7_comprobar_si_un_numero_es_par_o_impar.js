//comprobar si un numero es par o impar
const prompt = require("prompt-sync")()

const numero = parseInt(prompt("ingrese el numero "))

function parOimpar(numero){
    if (numero %2=== 0){
        return "es par"
    }
    else{
        return "es impar"
    }
}

let resultado = parOimpar(numero)

console.log(resultado)