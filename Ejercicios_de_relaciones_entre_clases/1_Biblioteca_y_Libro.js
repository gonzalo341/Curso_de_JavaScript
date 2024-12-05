//1- Biblioteca y Libro
//Crea las clases Biblioteca y Libro.
//
//Una biblioteca tiene un nombre y una lista de libros.
//Un libro tiene un título, autor y número de páginas.
//Agrega métodos en la clase Biblioteca para:
//Añadir un libro.
//Listar todos los libros.
//Agrega un método para buscar un libro por título.

//EJEMPLO MENÚ: 

const prompt = require('prompt-sync')()
let ciclo = true

//Inicio
while (ciclo === true) {
    const Usuario = prompt("Buen dia,  \n 1) Cliente \n 2) Bibliotecario \n ")
    switch (Usuario) {
        case "1":
            while (ciclo === true){
                const accion = prompt("¿Que desea hacer? \n 1) Buscar libro en el inventario \n 2) Pedir un libro")
                switch (accion) {
                    case "1":

                        break
                    case "2":
                        break
                    default:
                        break
                }
            }
            break
        case "2":
            break
        default:
            break
    }
}

class Libro {
    constructor(nombre, autor) {
        this.nombre = nombre
        this.autor = autor
    }

    agregarTema() {
        let tema = prompt("¿Cual es el tema del libro?")
        while (ciclo === true) {
            const verificacion = prompt(`¿El tema es ${tema}? \n 1) Correcto \n 2) Incorrecto \n 3) Borrar Tema`)
            switch (verificacion) {
                case "1":
                    this.tema = tema
                    console.log("Tema agregado")
                    break
                case "2":
                    tema = prompt("¿Cual es el tema del libro?")
                    continue
                case "3":
                    console.log("Tema Sin Agregar")
                    ciclo = false
                    break
                default:
                    break
            }
        }
    }
}

class Biblioteca {
    constructor(numero, listaDeLibros) {
        this.numero = numero
        this.listaDeLibros = listaDeLibros
    }

    buscarLibro(){
        while (ciclo === true) {
            const buscarPorNombre = ("¿Conoce el nombre del libro? \n 1) Si, conosco el Nombre. \n 2) No sé el nombre del libro. \n 3) Salir")
            switch (buscarPorNombre) {
                case "1":
                    buscarPorNombre.includes
                    break
                case "2":
                    break
                case "3":
                    ciclo = false
                    break
                default:
                    break
            }

        }
    }

    agregarLibro(){
        //Caracteristicas del libro (Nombre y Autor)
        const nombre = prompt("¿Que nombre le desea agregar al libro?")
        const autor = prompt("¿De que autor es el libro?")

        //Agregar Nombre y Autor a la clase Libro
        const nuevoLibro = new Libro(nombre)
        const nuevoAutor = new Libro(autor)

        //Agregar Libro a la lista de libros disponibles

        this.libro = libro
    }

    eliminarLibro(){

    }
}

//Lista de Libros: lista de libros guardados
let listaDeLibros = []