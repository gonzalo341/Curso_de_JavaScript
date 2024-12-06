//9: Comprobar si un array está ordenado
//Dado un array de números, usa un ciclo para comprobar si los números están ordenados de menor a mayor.

const listaDeNumeros = [56,64,125,783,12,79]
let counter = 0

//while funciona hasta que counter sea mayor que el largo de la lista
while (counter < listaDeNumeros.length) {
    //Si el numero de listaDeNumeros[counter] es menor que el numeros anterior ListaDeNumeros[counter - 1] entonces se activa el if
    if (listaDeNumeros[counter - 1] > listaDeNumeros[counter]){
        console.log(` El Arrays no está ordenado de menor a mayor porque ` + listaDeNumeros[counter - 1] + ` > ` + listaDeNumeros[counter])
        break
    }
    //por cada ciclo el counter va aumentando hasta ser mayor que el largo de la lista
    counter++
}