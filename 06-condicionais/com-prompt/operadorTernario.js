//Importar o prompt-sync
const prompt = require("prompt-sync")()

let idade = Number(prompt("Digite sua idade: "))

let resultado = idade >=18 ? "Entrada permitida" : "Entrada proibida"

console.log(resultado)