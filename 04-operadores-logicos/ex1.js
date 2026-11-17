const prompt = require("prompt-sync")()

let idade = Number(prompt("Qual sua idade? "))
let assinatura = prompt("Voce tem uma assinatura? ")

let podeAcessar = idade >= 18 && assinatura === "sim"

console.log("voce vai conseguir acessar o site?", podeAcessar)