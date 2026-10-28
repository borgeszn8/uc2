const prompt = require("prompt-sync")()

let limite = Number(prompt("Voce ja usou quantas consultas ate agora da IA: "))

if(limite >= 20)
{
    console.log("Voce atingiu o limite gratuito diario da IA. ")
}
else
{
    console.log("Voce ainda pode usar a IA.")
}

//Nesse caso é melhor usar o if-else pois se trata de numeros e o switch nao é recomendado para operar com numeros.
