const prompt = require("prompt-sync")()

let valorInicial = Number(prompt("quanto tenho? "))
let valorRecebido = Number(prompt("quanto ganhei? "))
let valorGasto = Number(prompt("quanto gastei? "))

let valorFinal = valorInicial + valorRecebido - valorGasto

console.log("sobrou:", valorFinal, "R$")