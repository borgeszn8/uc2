const prompt = require("prompt-sync")()

let Vip = prompt("O cliente e cliente VIP?")
let valor = Number(prompt("Qual foi o valor da compra?"))

let teraDesconto = valor >= 100 || vip === "sim"

console.log("O cliente vai conseguir desconto?", teraDesconto)