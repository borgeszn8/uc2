const prompt = require("prompt-sync")()

let numero = Number(prompt("Digite um numero de 1 a 7: "))

console.log("\nQual o dia da semana hoje")

if(numero === 1)
{
    console.log("\nHoje e segunda")
}
else if(numero === 2)
{
    console.log("\nHoje e terca-feira")
}
else if(numero === 3)
{
    console.log("\nHoje e quarta-feira")
}
else if(numero === 4)
{
    console.log("\nHoje e quinta_feira")
}
else if(numero === 5)
{
    console.log("\nHoje e sexta-feira")
}
else if(numero === 6)
{
    console.log("\nHoje e sabado")
}
else if(numero ===7)
{
    console.log("\nHoje e domingo")
}
else
{
    console.log("Esse numero e invalido tente usar um numero de 1 a 7")
}

