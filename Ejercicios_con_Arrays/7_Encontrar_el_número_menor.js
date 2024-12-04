//Ejercicio 7: Encontrar el número menor
//Escribe un ciclo que encuentre el número más pequeño en un array de números.

const listaDeNumeros = [24, 654, 123, 6, 234, 67, 8];
let counter = 0;
// numeroMenor empieza como el primer numero de la lista
let numeroMenor = listaDeNumeros[counter];

while (counter < listaDeNumeros.length) {
    if (listaDeNumeros[counter] <= numeroMenor) {
        //si el numero de la lista es menor o igual entonces numeroMenor es igual a ese numero
        numeroMenor = listaDeNumeros[counter];
    }
    counter++;
}

console.log(numeroMenor);
