const prompt = require("prompt-sync")()

let rank = prompt("Qual seu rank: ")

switch(rank)
{
    case "brronze":
        console.log("iniciante")
        break
    case "prata":
        console.log("intermediario")
        break
    case "ouro":
        console.log("avancado")
        break
    case "diamante":
        console.log("elite")
        break
    default:
        console.log("rank invalido")
}