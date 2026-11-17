const prompt = require("prompt-sync")()

let nota = Number(prompt("Digite sua nota: "))

if(nota >= 7)
{
    console.log("aprovado!")
}
else if(nota >= 5)
{
    console.log("Recuperacao!")
}
else
{
    console.log("Reprovado!")
}