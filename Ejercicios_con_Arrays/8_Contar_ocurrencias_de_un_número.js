//Ejercicio 8: Contar ocurrencias de un número
//Dado un array de números y un número objetivo, usa un ciclo para contar cuántas veces aparece el número objetivo en el array.

let listaDeNumeros = [378, 245, 973, 863, 88, 4, 8];
let counter = 0;
let numeroObjetivo = 8;
let cantidadDeNumeroObjetivo = 0;

while (counter < listaDeNumeros.length) {
    if (listaDeNumeros[counter] === numeroObjetivo) {
        cantidadDeNumeroObjetivo++;
    }
    counter++;
}

console.log(cantidadDeNumeroObjetivo);

listaDeNumeros = [378, 245, 973, 863, 88, 4, 8];
let arraysDeNumerosObjetivo = [4, 8];
counter = 0;
let counter2 = 0;
let cantidadDeNumeroObjetivoArrays = 0;

while (counter < listaDeNumeros.length) {
    while (counter2 < arraysDeNumerosObjetivo.length) {
        if (listaDeNumeros[counter] === arraysDeNumerosObjetivo[counter2]) {
            //prueba si el numero de la listaDeNumeros es igual al primer numero del arraysDeNumerosObjetivo luego intenta con el segundo numero del arraysDeNumerosObjetivos
            cantidadDeNumeroObjetivoArrays++;
        }
        counter2++; //sigue con el siguiente numero del arraysDeNumerosObjetivo
    }
    counter2 = 0; //Reinicia el counter2 a 0 para que el siguiente numero de la listaDeNumeros se compare desde el principio del arraysDeNumerosObjetivo
    counter++; //sigue con el siguiente numero de la listaDeNumeros
}

console.log(cantidadDeNumeroObjetivoArrays);
