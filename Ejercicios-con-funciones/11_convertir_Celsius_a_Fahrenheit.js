//convertir grados Celsius a Fahrenheit
const prompt = require(`prompt-sync`)()

const a = parseInt(prompt(`ingrese la temperatura `))

function temperatura(a){
    return (a * 9/5) + 32
}

let resultado = temperatura(a)

console.log(resultado)