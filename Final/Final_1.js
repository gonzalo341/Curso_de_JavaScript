// Biblioteca Virtual

const prompt = require("prompt-sync")()
let ciclo = true

//Importar Clases
import {
    Libro, Biblioteca
} from './clases.js'

//Lista de Libros: lista de libros guardados
let listaDeLibros = ["Matematica"]

//Inicio
while (ciclo === true) {
    const Usuario = prompt("Buen dia a que categoria pertenece? \n 1) Cliente. \n 2) Bibliotecario. \n ) // A que categoria pertenece el usuario")
    switch (Usuario) {
        case 1:
            while (ciclo === true) {
                const accion = prompt("¿Que desea hacer? \n 1) Buscar libro en el inventario \n 2) Pedir un libro")
                switch (accion) {
                    case 1:
                        Biblioteca.buscarLibro()
                        break
                    case 2:
                        pedirLibro()
                        break
                    default:
                        break
                }
            }
            break
        case 2:
            break
        default:
            break
    }
}

console.log(buscarPorNombre.includes(listaDeLibros))