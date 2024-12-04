//Ejercicio 14: Eliminar duplicados
//Dado un array de números, usa un ciclo para crear un nuevo array que contenga solo los elementos únicos (sin duplicados).

const listOfNumbers = [1, 2, 3, 4, 5, 1, 2, 3];
let newlistOfNumbers = [];

for (let counter = 0; counter < listOfNumbers.length; counter++) {
    // Usando indexOf Si el número no está en newlistOfNumbers devuelve -1 pero si esta devuelve 0
    if (newlistOfNumbers.indexOf(listOfNumbers[counter]) === -1) {
        newlistOfNumbers.push(listOfNumbers[counter]);
    }
}

console.log(newlistOfNumbers);

