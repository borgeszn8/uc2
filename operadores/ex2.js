const prompt = require("prompt-sync")()

let valor = Number(prompt("Quanto voce pagou no fone?"))
let parcelas = Number(prompt("Em quantas parcelas voce pagara?"))

let valorFinal = valor / parcelas

console.log("voce vai pagar:", valorFinal)