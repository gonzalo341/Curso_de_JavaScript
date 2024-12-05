
const prompt = require('prompt-sync')()

let valor1 = parseFloat(prompt('ingresar valor 1 '))
let Operador = prompt('ingresar Operador ')
let valor2 = parseFloat(prompt('ingresar valor 2 '))

switch (Operador) {
    case '+':
        let suma = valor1 + valor2
        console.log(suma)
        break;
    case '-':
        let resta = valor1 - valor2
        console.log(resta)
        break;
    case '*':
        let multiplicacion = valor1 * valor2
        console.log(multiplicacion)
        break;
    case '/':
        if (valor2 === 0)
            console.log('0');
        if (valor2 > 0) {
            let division = valor1 / valor2
            console.log(division.toFixed(2))
        }
        break;
    default:
        console.log('operador no registrado')
} 