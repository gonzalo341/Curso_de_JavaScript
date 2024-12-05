//Ejercicio 1: Creación de clase Persona.
//Crea una clase Persona con 4 atributos y dos métodos. Instancia dos objetos de esa clase.

class Persona {
    constructor(nombre, edad, altura, colorDePelo) {
        //atributos
        this.nombre = nombre
        this.edad = edad
        this.altura = altura
        this.colorDePelo = colorDePelo
    }


    //Metodos
    caminar() {
        console.log(`${this.nombre} está caminando`)
    }
    sentado() {
        console.log(`${this.nombre} está sentado`)
    }
    esMayor() {
        if (this.edad < 18)
            console.log(`${this.nombre} es menor de edad`)
        else {
            console.log(`${this.nombre} es mayor de edad`)
        }
    }

    agregarAuto(auto) {
        this.auto = auto
        console.log(`${this.nombre} tiene un auto ${this.auto.marca}, ${this.auto.modelo}, ${this.auto.color}`)
    }
}

class Auto {
    constructor(marca, modelo, color, asientos) {
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.asientos = asientos
    }

    cantidadDeAsientos(){
        if (this.auto.asientos < 4){
            console.log(`Este auto no es para familias grandes`)
        }
        else {
            console.log("Este auto es para familias grandes")
        }
    }
}


const auto1 = new Auto("Fiat", "siena 1.5", "gris", 4)

//Personas

let persona1 = new Persona('Gonzalo', 15, 1.72, "negro")

persona1.esMayor()

persona1.agregarAuto(auto1)

const listaDePersonas = [persona1]

console.log(listaDePersonas)