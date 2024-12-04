const prompt = require("prompt-sync")()

let numi = parseInt(prompt("numero inicial "))
let numf = parseInt(prompt("numero final "))

while (numi < numf) {
    numi ++
    console.log(numi)
}