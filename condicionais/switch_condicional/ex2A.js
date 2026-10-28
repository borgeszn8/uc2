const prompt = require("prompt-sync")()

let porcentagemDaBateria = Number(prompt("Qual e a porcentagem da bateria do carro? "))

if(porcentagemDaBateria >= 30)
{
    console.log("Bateria suficienter para iniciar a viagem. ")
}
else if(porcentagemDaBateria <= 29)
{
    console.log("Recarregue a bateria antes de viajar. ")
}
else
{
    console.log("Caractere inexistente. (tente por so o numero)")
}

//Nesse caso é melhor usar o if-else pois se trata de numeros e o switch nao é recomendado para operar com numeros.

