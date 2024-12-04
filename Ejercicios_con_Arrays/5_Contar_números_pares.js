//Ejercicio 5: Contar números pares
//Dado un array de números, usa un ciclo para contar cuántos de ellos son pares.

const listaDeNumeros = [56, 64, 125, 783, 12, 79];
let cantidadDeNumerosPares = 0;
let counter = listaDeNumeros.length - 1;

//
while (counter >= 0) {
    if (listaDeNumeros[counter] % 2 === 0) {
        cantidadDeNumerosPares++;
    }
    counter--;
}

console.log(cantidadDeNumerosPares);
