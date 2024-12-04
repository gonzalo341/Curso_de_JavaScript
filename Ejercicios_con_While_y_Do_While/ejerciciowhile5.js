//validacion de usuario y contraseña
const prompt = require("prompt-sync")()

const email = "usuario.84@gmail.com";
const contraseña = "hola";
let emailIngresado = "email";
let contraseñaIngresada = "pass";


while (email !== emailIngresado) {
    emailIngresado = prompt("Ingrese su correo electronico ")
    if (email !== emailIngresado) {
        console.log("correo incorrecto, intente de nuevo")
        continue //sirve para que reinicie el ciclo sin romper el ciclo
    }
    console.log("correo correcto")
    while (contraseña !== contraseñaIngresada) {
        contraseñaIngresada = prompt("Ingrese su contraseña ")
        if (contraseña !== contraseñaIngresada) {
            console.log("contraseña incorrecta, intente de nuevo")
        }}
    }
    console.log("contraseña correcta")