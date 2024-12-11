// Clases

export class Libro {
    constructor(nombre, autor) {
        this.nombre = nombre;
        this.autor = autor;
    }

    // Funcion para que en caso de conocer el tema del libro se pueda agregar para una busqueda mas precisa.
    agregarTema() {
        let tema = prompt('¿Cual es el tema del libro?');
        let ciclo = true;
        while (ciclo) {
            const verificacion = prompt(`¿El tema es ${tema}? \n1) Correcto \n2) Incorrecto \n3) Borrar Tema`);
            switch (verificacion) {

                case '1': // Es correcto y el tema se agrega.
                    this.tema = tema;
                    console.log('Tema agregado'); // Le avisa al usuario que el procedimiento ya termino.
                    ciclo = false; // Termina el while.
                    break;

                case '2': // Es incorrecto y se vuelve a pedir el tema
                    tema = prompt('¿Cual es el tema del libro?'); // Vuelve a preguntar por el tema.
                    continue; // Reinicia el ciclo para que vuelva a verificar si el tema esta bien.

                case '3': // El usuario no desea agregar un tema.
                    console.log('Tema no agregado'); // Le avisa que el tema no se agrego al libro.
                    ciclo = false; // Termina el while.
                    break;

                default:
                    console.log('Opción no válida');
            }
        }
    }

    // Función para agregar libros al inventario
    agregarCantidad(cantidad) {
        const cantidad = prompt("¿cuantos libros hay para agregar al inventario?") //Pregunta por la cantidad de libros.
        this.cantidad = cantidad;
    }

    // Función para agregar libros a la biblioteca
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

    // Función para registrar devolución de libro
    devolverLibro(nombre) {
        const devolverLibrolibro = prompt("¿Que libro desea devolver?");
        if (devolverLibrolibro.includes(this.libros)) {
            this.cantidad++;
            console.log(`El libro "${devolverLibrolibro}" ha sido devuelto. Hay ${this.cantidad} copias disponibles.`);
        } else {
            console.log('Este libro no está registrado en la biblioteca.');
        }
    }
}

export class Biblioteca {
    constructor() {
        this.libros = [];  // Lista de libros en la biblioteca
    }

    // Función para buscar libros por nombre
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

    // Función para eliminar un libro
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

    // Función para pedir un libro
    pedirLibro(nombre) {
        const libroPedido = prompt("¿Que libro desea pedir?");
        if (this.libros.includes(libroPedido)) {
            libro.cantidad--;
            console.log(`Se ha pedido el libro "${libroPedido}". Quedan ${this.libros.cantidad} copias.`);
        } else {
            console.log('No hay copias disponibles de este libro.');
        }
    }
}
