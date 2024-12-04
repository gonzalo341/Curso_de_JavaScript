//Ejercicio 10: Eliminar un elemento de un array
//Dado un array de números y un número a eliminar, usa un ciclo para crear un nuevo array que no contenga el número objetivo.

const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newList = [];
const numeroAEliminar = 10;
let counter = listaDeNumeros.length - 1; //ya que el array empieza contando desde 0 el .length tiene un numero mas el cual se marca como undefined

while (counter > 0) {
    if (listaDeNumeros[counter] !== numeroAEliminar)
        newList.unshift(listaDeNumeros[counter]); //agrega el listaDeNumeros[counter] al principio de la newList
    counter--;
}

console.log(newList);
