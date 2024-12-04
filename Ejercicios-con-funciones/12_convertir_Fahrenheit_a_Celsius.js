//convertir grados Fahrenheit a Celsius
const prompt = require("prompt-sync")()

const a = parseInt(prompt("ingrese la temperatura "))

function temperatura(a){
    return (a -32) * 5/9
}

let resultado = temperatura(a)

console.log(resultado)