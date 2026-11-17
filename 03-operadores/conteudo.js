//OPERADORES ARITIMEDICOS

/*
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
/*
//realizar as operacoes
let soma = number1 + number2
console.log("a soma e" + soma)

let subtracao = number1 - number2
console.log("a subtracao e" + subtracao)

let multiolicacao= number1 * number2
console.log("a multiplicacao e" + multiolicacao)
*/
// realizar as operacoes 
let soma = number1 + number2
let subtracao = number1 - number2
let  multiplicacao = number1 * number2
let divisao = number1 / number2
let resto = number1 %  number2

console.log("a soma e:" + soma)
console.log("a subtracao e:" + subtracao)
console.log("a multiplicacao e:" + multiplicacao)
console.log("a divisao e:" + divisao)
console.log("o resdto da divisao e:" + resto)