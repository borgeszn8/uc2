const prompt = require("prompt-sync")()

let numeroInicial = Number(prompt("Qual o numero inicial: "))
let multiplicador = Number(prompt("Qual o multiplicador: "))
let divisor = Number(prompt("Qual o divisor: "))

let etapa1 = numeroInicial * multiplicador

let etapa2 = etapa1 / divisor 

let etapa3 = etapa2 % 7

let etapa4 = etapa3 + 10

let etapa5 = etapa4 - 3 * numeroInicial
console.log("resoltado final: ", etapa5)