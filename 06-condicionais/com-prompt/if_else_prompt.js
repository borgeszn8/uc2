const prompt = require("prompt-sync")()

let bateria = Number(prompt("Digite a porcentagem da bateria do seu celular: ")) 

if(bateria <= 20)
{
    console.log("Procure um carregador!")
}
else
{
    console.log("Nao precisa de carregador por enquanto!")
}
