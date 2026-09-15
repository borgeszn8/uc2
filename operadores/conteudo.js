//OPERADORES ARITIMEDICOS

/**
 * Os operadores aritimedicos servem para fazerem contas: sao eles
 * soma-> +
 * subitracao-> -
 * multiplicacao-> *
 * divisao-> /
 * resto da divisao -> %
 * 
 */

// importo prompt
const prompt = require("prompt-sync")()

//Pedindo os numeros para o usuario 
let number1 = Number(prompt("Digite o primeiro numero: " ))
let number2 = Number(prompt("Digite o primeiro numero: " ))

//realizar as operacoes
let soma = number1 + number2
console.log(soma)