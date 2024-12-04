//Ejercicio 12: Crear un array de longitudes
//Dado un array de palabras, usa un ciclo para crear un nuevo array que contenga la longitud de cada palabra.

const palabras = ["hola", "letra", "apellido"];
let longitudDeTodasLasPalabras = [];

for (let counter = 0; counter < palabras.length; counter++) {
    let palabra = palabras[counter]; //Palabra toma el valor de la palabra en el array palabras[counter]
    let palabrasPorLetras = palabra.split(""); //la palabra se separa por letras en un nuevo arrays llamado palabrasPorLetras
    let longitudDeLaPalabra = palabrasPorLetras.length; //longitudDeLaPalabra es igual al largo del nuevo arrays
    longitudDeTodasLasPalabras.push(longitudDeLaPalabra); //se agrega ese numero al array de longitudDeTodasLasPalabras
    console.log(`La palabra ${palabras[counter]} tiene ${longitudDeLaPalabra} letras`); //muestra la palabra y la cantidad de letras
    palabrasPorLetras = [];
}

console.log(longitudDeTodasLasPalabras);