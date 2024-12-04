//Ingreso de notas
const prompt = require("prompt-sync")()

let suma = 0;
let cantidadDeNotas = 0
let nota = 0

while ( nota >= 0) {
    nota = parseInt(prompt("ingrese la nota "))
    if (nota > 0) {
        suma = nota + suma
        cantidadDeNotas++
    }

}
promedio = suma / cantidadDeNotas
console.log("el promedio de sus notas es " + promedio)