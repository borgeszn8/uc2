const prompt = require("prompt-sync")()

let expectativaDaTurma = Number(prompt("qual a expectativa da turma em porcentagem para Tiago ir na aula amanha?  "))
let chance = Number(prompt("em porcentagem qual é a chance Tiago comparecer na aula?  "))

let resultado = chance >= 80 && expectativaDaTurma >= 90 ? "Tiago ira na aula" : "Tiago nao ira na aula"

console.log(resultado)