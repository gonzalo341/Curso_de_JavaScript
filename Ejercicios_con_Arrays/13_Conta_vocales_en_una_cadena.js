//Ejercicio 13: Contar vocales en una cadena
//Dada una cadena de texto, usa un ciclo para contar cuántas vocales tiene.

const string = `hola`;
let letterArrays = string.split(``); //Convierte la palabra `hola` en un arrays de letras [`H`, `o`, `l`, `a`].
let counter = 0;
const vowels = `aeiouAEIOU`; //vocales que puedes encontrar
let vowelsCounter = 0;

while (counter < letterArrays.length) {
    //si las vocales no se encuentran retorna -1 pero si es diferente el if se activa y el contador de vocales aumenta
    if (vowels.indexOf(letterArrays[counter]) !== -1) {
        vowelsCounter++;
    }
    counter++;
}

console.log(`La palabra tiene ${vowelsCounter} vocales.`);
