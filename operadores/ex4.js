const prompt = require("prompt-sync")()

let inicial = Number(prompt("Quantas moedas voce comecou? "))
let missao = Number(prompt("Quantas moedas ganhou nas missoes? "))
let item = Number(prompt("Valor do item? "))
let upgrade = Number(prompt("Quantos upgrades sera feito? "))
let valorSemUps = inicial + missao - item

let valorDosUps = valorSemUps / upgrade

console.log("O valor de cada upgrade sera:", valorDosUps , "moedas")