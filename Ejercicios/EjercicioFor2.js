const prompt = require('prompt-sync')()

const ValorN = parseFloat(prompt('Ingrese valor N '))
let valorN= 10
let suma= 0
for (let i = 0; i <= ValorN; i++) {suma = i + suma}

console.log(suma)