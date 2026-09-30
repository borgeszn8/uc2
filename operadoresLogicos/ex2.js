const prompt = require("prompt-sync")()

let idade = Number(prompt("Quantos anos voce tem? "))
let identidade = prompt("A identidade e valida? (sim/nao) ")


let podeComprar = idade >= 18 && identidade === "sim"

console.log("\Pode comprar bebida alcoolica? ", podeComprar)  