//Ejercicio 2: Sumar los elementos de un array
//Dado un array de números, utiliza un ciclo para calcular la suma de todos los elementos.

const numeros = [1, 2, 3, 4, 5, 6];

//counter que empieza desde 0 hasta el mayor

let counter = 0;
let suma = 0;

while (counter < numeros.length) {
    suma = suma + numeros[counter];
    counter++;
}

console.log(suma);

//counter que empieza desde el mayor hasta 0

counter = numeros.length - 1;
suma = 0;
while (counter >= 0) {
    console.log(numeros[counter]);
    suma = suma + numeros[counter];
    counter--;
}
console.log(suma);
