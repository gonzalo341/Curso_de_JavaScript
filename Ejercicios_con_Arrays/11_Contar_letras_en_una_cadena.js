//Ejercicio 11: Contar letras en una cadena
//Dada una cadena de texto, usa un ciclo para contar cuántas letras tiene.

const string = "hola";
let letterArrays = string.split(""); //Convierte la palabra "hola" en un arrays de letras ["H", "o", "l", "a"].
let counter = 0;
let wordLenght = 0;

while (counter < letterArrays.length) {
    //Cuando se usa /[a-z , A-Z]/.test(arrays[]) comprueba si tiene letras minusculas (a-z) o mayusculas (A-Z) y devuelve True o False.
    if (/[a-z , A-Z]/.test(letterArrays[counter])) {
        wordLenght++;
    }
    counter++;
}

console.log("La palabra tiene " + wordLenght + " letras.");
