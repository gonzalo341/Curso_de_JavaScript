//numero mayor
const prompt = require(`prompt-sync`)()

const a = parseInt(prompt(`ingrese el numero `))
const b = parseInt(prompt(`ingrese el numero `))

function mayor(a,b){
    if (a>b){
        return a
    }
    else{
        return b
    }
}

let resultado = mayor(a,b)

console.log(resultado)