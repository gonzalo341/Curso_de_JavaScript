//suma de numeros usando while con cantidad de numeros
const prompt = require("prompt-sync")()

let cantidadDeNumeros = parseInt(prompt("¿Cuantos numeros va a ingresar? "))
let suma = 0;

while (cantidadDeNumeros > 0) {
    const numeroIngresados = parseInt(prompt("ingrese un numero "))
    suma = numeroIngresados + suma
    cantidadDeNumeros--
}

console.log("la suma de todos los numeros es " + suma)