const prompt = require ("prompt-sync")()

let valorCompra = Number(prompt("Qual o valor da compra? "))

let saldo = Number(prompt("Qual o valor do saldo? "))

let resultado = saldo >= valorCompra?"Compra aprovada":"Saldo insuficiente";

console.log(resultado)

