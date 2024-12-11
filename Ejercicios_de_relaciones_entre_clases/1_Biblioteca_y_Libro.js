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

//Lista de Libros: lista de libros guardados
let listaDeLibros = ["Matematica"]

//Inicio
while (ciclo === true) {
    const Usuario = prompt(`Buen dia a que categoria pertenece? \n 1) Cliente. \n 2) Bibliotecario. \n `) // A que categoria pertenece el usuario
    switch (Usuario) {
        case `1`:
            while (ciclo === true) {
                const accion = prompt(`¿Que desea hacer? \n 1) Buscar libro en el inventario \n 2) Pedir un libro`)
                switch (accion) {
                    case `1`:
                        buscarLibro()
                        break
                    case `2`:
                        pedirLibro()
                        break
                    default:
                        break
                }
            }
            break
        case `2`:
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

    // Funcion para que en caso de conocer el tema del libro se pueda agregar para una busqueda mas precisa.
    agregarTema() {
        const tema = prompt(`¿Cual es el tema del libro?`)
        while (ciclo === true) {
            const verificacion = prompt(`¿El tema es ${tema}?\n 1) Correcto \n 2) Incorrecto \n 3) Borrar Tema`) //Confirmacion de si el tema agregado es correcto.
            switch (verificacion) {
                case `1`: // Es correcto y el tema se agrega.
                    this.tema = tema
                    console.log(`Tema agregado`) // Le avisa al usuario que el procedimiento ya termino.
                    break
                case `2`: // Es incorrecto y se vuelve a pedir el tema
                    tema = prompt(`¿Cual es el tema del libro?`) // Vuelve a preguntar por el tema.
                    continue // Reinicia el ciclo para que vuelva a verificar si el tema esta bien.
                case `3`: // El usuario no desea agregar un tema.
                    console.log(`Tema Sin Agregar`) // Le avisa que el tema no se agrego al libro.
                    ciclo = false // Termina el while.
                    break
                default:
                    break
            }
        }
    }

    // Cada libro tendra una cantidad en el inventario.
    agregarCantidad() {
        const cantidad = prompt("¿cuantos libros hay para agregar al inventario?") //Pregunta por la cantidad de libros.
    }
}

class Biblioteca {
    constructor(numero, undefined) {
        this.numero = numero
        this.undefined = undefined
    }

    buscarLibro() {
        while (ciclo === true) {
            // Preguntar sobre si conoce el nombre del libro, en el caso de que no lo conosca se preguntara sobre el tema del libro o la editorial
            const buscarPorNombre = prompt(`¿Conoce el nombre del libro? \n 1) Si, conosco el Nombre. \n 2) No sé el nombre del libro. \n 3) Salir`)
            switch (buscarPorNombre) {
                case `1`: // Si conoce el nombre del libro, pregunta como se llama y lo verifica si esta disponible en la lista de libros
                    const nombreDelLibro = prompt(`¿Cual es el nombre del libro que desea buscar?`)
                    if (buscarPorNombre.includes(nombreDelLibro) === true) {
                        console.log(`El libro ${nombreDelLibro} si se encuentra disponible`)
                    }
                    break
                case `2`:
                    break
                case `3`:
                    ciclo = false
                    break
                default:
                    break
            }

        }
    }

    agregarLibro() {
        //Caracteristicas del libro (Nombre y Autor)
        const nombre = prompt(`¿Que nombre le desea agregar al libro?`)
        const autor = prompt(`¿De que autor es el libro?`)

        //Agregar Nombre y Autor a la clase Libro
        const nuevoLibro = new Libro(nombre)
        const nuevoAutor = new Libro(autor)

        //Agregar Libro a la lista de libros disponibles

        this.libro = libro
    }

    eliminarLibro() {
        const nombreDelLibroEliminado = prompt(`¿Cual es el nombre del libro que desea eliminar?`)

    }

    //la funcion pedirLibro() buscara si el libro esta disponible, luego de confirmar el pedido restara el libro del inventario.
    PedirLibro() {
        if (nombreDelLibro.includes(listaDeLibros) === true) {

        }
    }
}

console.log(buscarPorNombre.includes(listaDeLibros))