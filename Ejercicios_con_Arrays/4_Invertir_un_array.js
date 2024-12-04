//Ejercicio 4: Invertir un array
//Dado un array de números, usa un ciclo para invertir el array (es decir, que el último elemento pase a ser el primero, y viceversa).

let listaDeNumeros = [1, 5, 234, 57, 1243, 57];
let listaDeNumerosInvertida = [];
let segundaListaDeNumerosInvertida = [];

let counter = 0;
let counterInvertido = listaDeNumeros.length - 1;

//El while va a funcionar hasta que counter sea mayor que el largo de la lista
while (counter < listaDeNumeros.length) {
    //listaDeNumerosInvertida.unshift("valor que se va a agregar al principio")
    listaDeNumerosInvertida.unshift(listaDeNumeros[counter]);
    counter++;
}

console.log(listaDeNumerosInvertida);

//El counter empieza como el largo de la lista - 1 y el while va a funcionar hasta que sea menor que 0
while (counterInvertido >= 0) {
    //listaDeNumerosInvertida.push("valor que se va a agregar al final")
    segundaListaDeNumerosInvertida.push(listaDeNumeros[counterInvertido]);
    counterInvertido--;
}

console.log(segundaListaDeNumerosInvertida);
