const prompt = require("prompt-sync")()

let idade = Number(prompt("Digite sua idade: "))

if(idade >= 18)
{
    console.log("Voce e maior de idade!")
}
