//validacion de contraseña
const prompt = require("prompt-sync")()

const contraseña = "hola"
let contraseñai = "pass"

while (contraseñai !== contraseña) {
    contraseñai = prompt("Ingrese su contraseña ")
    if (contraseña !== contraseñai) {
        console.log("contraseña incorrecta, intente de nuevo")
    }
}
console.log("contraseña correcta")