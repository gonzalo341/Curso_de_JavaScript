//Ejercicio 6: Sumar solo los números impares
//Dado un array de números, usa un ciclo para sumar solo los números impares.

const listaDeNumeros = [56, 64, 125, 783, 12, 79];
let counter = 0;
let resultado = 0;

//while funciona hasta que counter sea mayor que el largo de la lista
while (counter < listaDeNumeros.length) {
    //si el numero la lista es impar entonces se suma
    if (listaDeNumeros[counter] % 2 !== 0) {
        resultado = resultado + listaDeNumeros[counter];
    }
    //por cada ciclo el counter va aumentando hasta ser mayor que el largo de la lista
    counter++;
}

console.log(resultado);
