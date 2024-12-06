//promedio de tres numeros
const prompt = require(`prompt-sync`)()

const a = parseInt(prompt(`ingrese el numero `))
const b = parseInt(prompt(`ingrese el numero `))
const c = parseInt(prompt(`ingrese el numero `))

function promedio(a,b,c){
    return (a + b + c) / 3
}

let resultado = promedio(a,b,c)

console.log(resultado)