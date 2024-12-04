//Ejercicio 3: Encontrar el número mayor
//Escribe un ciclo que encuentre el número más grande en un array de números.

const listaDeNumeros = [45, 34, 123, 634, 32, 64, 363, 12, 1246];

let counter = 0;
let numeroMayor = listaDeNumeros[counter];

//El counter empieza desde 0 y por cada ciclo del while aumenta en 1 cuando sea mayor que el largo de la listaDeNumeros se va a detener
while (counter < listaDeNumeros.length) {
    if (listaDeNumeros[counter] > numeroMayor) {
        //el numeroMayor es 0 si el numero de la lista que se esta utilizando es mayor entonces numeroMayor va a ser igual a ese numero
        numeroMayor = listaDeNumeros[counter];
    }
    counter++;
}

console.log(numeroMayor);
