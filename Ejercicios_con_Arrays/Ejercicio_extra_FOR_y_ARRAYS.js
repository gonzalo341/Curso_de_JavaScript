//Ejercicio extra FOR y ARRAYS:
//Paso 1: Dado un array de números, recorrerlo para obtener por un lado sus números pares y por otro sus números impares. 
//Paso 2: Una vez obtengas eso, vas a declarar una variable resultado. Si el número es par, se va a sumar al resultado, si el número es impar, se va a restar al resultado.

const listaDeNumeros = [56,64,125,783,12,79]
let counter = 0
let resultado = 0

//while funciona hasta que counter sea mayor que el largo de la lista
while (counter < listaDeNumeros.length) {
    //si el numero la lista es par entonces se suma
    if (listaDeNumeros[counter] % 2 === 0){
        resultado = resultado + listaDeNumeros[counter]
    }
    //si el if no se cumple entonces el numero es impar y se resta
    else if (listaDeNumeros[counter] % 2 !== 0) {
        resultado = resultado - listaDeNumeros[counter]
    }
    //por cada ciclo el counter va aumentando hasta ser mayor que el largo de la lista
    counter++
}

console.log(resultado)