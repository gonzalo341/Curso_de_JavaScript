//promedio de notas usando while
const prompt = require("prompt-sync")()

let estudiantes = parseInt(prompt("Cantidad de estudiantes "))
let suma = 0;
let estudiantesaux = estudiantes
while (estudiantes > 0) {
    const nota = parseInt(prompt("ingrese la nota "))
    suma = nota + suma
    estudiantes--
}
promedio = suma / estudiantesaux
console.log("el promedio de la clase es de " + promedio)