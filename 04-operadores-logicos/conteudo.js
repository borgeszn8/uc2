// operadores && - E 
// Usamos && quando TODAS as condicoes precisam ser verdadeiras ao mesmo tempo.

const prompt = require("prompt-sync")()

//Para entrar em um evento, a pessoa precisa:
//1) ter 18 anos ou mais 
// E
//2) possui engresso

let idade = Number(prompt("Digite sua idade: "))
let possuiEngresso = prompt("Possui ingresso? Responda sim ou nao: ")

let podeEntrar = idade >= 18 && possuiEngresso === "sim"

console.log("Pode entrar no evento?",podeEntrar)