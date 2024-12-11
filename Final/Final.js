// Biblioteca Virtual
import promptSync from 'prompt-sync';
import { Libro, Biblioteca } from './clases.js';

const prompt = promptSync();  // Crear la instancia de prompt-sync

let biblioteca = new Biblioteca();
let ciclo = true;

// Función principal de ejecución
while (ciclo) {
    const categoria = prompt(`Buen día. ¿A qué categoría pertenece? \n1) Cliente \n2) Bibliotecario \n3) Salir`);
    
    switch (categoria) {
        case '1':  // Cliente
            const accionCliente = prompt(`¿Qué desea hacer? \n1) Buscar libro \n2) Pedir un libro \n3) Salir`);
            switch (accionCliente) {
                case '1':
                    const nombreBuscar = prompt('Ingrese el nombre del libro a buscar: ');
                    biblioteca.buscarLibro(nombreBuscar);
                    break;
                case '2':
                    const nombrePedir = prompt('Ingrese el nombre del libro a pedir: ');
                    biblioteca.pedirLibro(nombrePedir);
                    break;
                case '3':
                    ciclo = false;
                    break;
                default:
                    console.log('Opción no válida');
            }
            break;

        case '2':  // Bibliotecario
            const accionBibliotecario = prompt(`¿Qué desea hacer? \n1) Agregar libro \n2) Eliminar libro \n3) Salir`);
            switch (accionBibliotecario) {
                case '1':
                    const nombreLibro = prompt('Ingrese el nombre del libro: ');
                    const autorLibro = prompt('Ingrese el autor del libro: ');
                    const nuevoLibro = new Libro(nombreLibro, autorLibro);
                    biblioteca.agregarLibro(nuevoLibro);
                    break;
                case '2':
                    const nombreEliminar = prompt('Ingrese el nombre del libro a eliminar: ');
                    biblioteca.eliminarLibro(nombreEliminar);
                    break;
                case '3':
                    ciclo = false;
                    break;
                default:
                    console.log('Opción no válida');
            }
            break;

        case '3':
            ciclo = false;
            break;

        default:
            console.log('Opción no válida');
    }
}
