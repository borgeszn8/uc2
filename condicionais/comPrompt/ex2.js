const prompt = require("prompt-sync")()

let pontuacao = Number(prompt("Quantos pontos voce tem: "))

if(pontuacao >= 1000)
{
    console.log("Lenda dos Games")
}
else if(pontuacao >= 500)
{
    console.log("Jogador Pro")
}
else
{
    console.log("Continue tentando, padawan!")
}