// Clases

export class Libro {
    constructor(nombre, autor) {
        this.nombre = nombre
        this.autor = autor
    }

    // Funcion para que en caso de conocer el tema del libro se pueda agregar para una busqueda mas precisa.
    agregarTema() {
        const tema = prompt("¿Cual es el tema del libro?")
        while (ciclo === true) {
            const verificacion = prompt(`¿El tema es ${tema}?\n 1) Correcto \n 2) Incorrecto \n 3) Borrar Tema`) //Confirmacion de si el tema agregado es correcto.
            switch (verificacion) {
                case 1: // Es correcto y el tema se agrega.
                    this.tema = tema
                    console.log("Tema agregado") // Le avisa al usuario que el procedimiento ya termino.
                    break
                case 2: // Es incorrecto y se vuelve a pedir el tema
                    tema = prompt("¿Cual es el tema del libro?") // Vuelve a preguntar por el tema.
                    continue // Reinicia el ciclo para que vuelva a verificar si el tema esta bien.
                case 3: // El usuario no desea agregar un tema.
                    console.log("Tema Sin Agregar") // Le avisa que el tema no se agrego al libro.
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

export class Biblioteca {
    constructor(numero, undefined) {
        this.numero = numero
        this.undefined = undefined
    }

    buscarLibro() {
        ciclo = true
        while (ciclo) {
            // Preguntar sobre si conoce el nombre del libro, en el caso de que no lo conosca se preguntara sobre el tema del libro o la editorial
            const buscarPorNombre = prompt("¿Conoce el nombre del libro? \n 1) Si, conosco el Nombre. \n 2) No sé el nombre del libro. \n 3) Salir")
            switch (buscarPorNombre) {

                case 1: // Si conoce el nombre del libro, pregunta como se llama y lo verifica si esta disponible en la lista de libros
                    const nombreDelLibro = prompt("¿Cual es el nombre del libro que desea buscar?")
                    if (buscarPorNombre.includes(nombreDelLibro) === true) {
                        console.log(`El libro ${nombreDelLibro} si se encuentra disponible`)
                    }
                    break

                case 2:
                    break

                case 3:
                    ciclo = false
                    break

                default:
                    break
            }

        }
    }

    agregarLibro() {
        //Caracteristicas del libro (Nombre y Autor)
        const nombre = prompt("¿Que nombre le desea agregar al libro?")
        const autor = prompt("¿De que autor es el libro?")

        //Agregar Nombre y Autor a la clase Libro
        const nuevoLibro = new Libro(nombre)
        const nuevoAutor = new Libro(autor)

        //Agregar Libro a la lista de libros disponibles

        this.libros = libro
    }

    eliminarLibro() {
        ciclo = true
        const nombreDelLibroEliminado = prompt("¿Cual es el nombre del libro que desea eliminar?")
        if (this.libros.includes(nombreDelLibroEliminado)) {
            let indice = this.libros.includes(nombreDelLibroEliminado)
            this.libros.splice(indice);
            console.log(`El libro "${nombreDelLibroEliminado}" ha sido eliminado de la biblioteca.`);
        } else {
            console.log('El libro no existe en la biblioteca.');
        }

    }

    //la funcion pedirLibro() buscara si el libro esta disponible, luego de confirmar el pedido restara el libro del inventario.
    PedirLibro() {
        ciclo = true
        if (nombreDelLibro.includes(listaDeLibros) === true) {
            while (ciclo) {

            }

        } 
        else {
            console.log('No hay copias disponibles de este libro.');
        }
    }

    devolverLibro(nombre) {
        ciclo = true
    }
}