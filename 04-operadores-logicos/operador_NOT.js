// OPERADOR !  -NAO | NOT

// O operador ! significa NAO. Ele INVERTE um valor logico

// !true -> false
// !false -> true

//Imagine uma porta. Se a porta NAO estiver trancada, podemos entrar.

const prompt = require("prompt-sync")()

let resposta = prompt("A porta esta trancada? (sim/nao)")

//tranformamos a resposta em true ou false

let portaTrancada = resposta === "sim"

console.log("\n Porta esta trancada?")
console.log(portaTrancada)

/** 
 * Agora usamos !
 * Se portaTrancada = false -> !portaTrancada
*/

let podeEntrar = !portaTrancada

console.log("\n NAO esta trancada? ")
console.log(!portaTrancada)

console.log("\n Pode entrar?")
console.log(podeEntrar)