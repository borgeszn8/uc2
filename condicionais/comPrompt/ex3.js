const prompt = require("prompt-sync")()

console.log("Voce so pode botar 80 pontos em uma da caracteristicas (coragem, inteligencia e lealdade). voce tambem pode deixar todas menos que 80 caso queira.)")
let coragem = Number(prompt("Quanto pontos de caragem voce tem? "))
let inteligencia = Number(prompt("Quantos pontos de inteligencia voce tem? "))
let lealdade = Number(prompt("Quantos pontos de lealdade voce tem? "))

if(coragem >=80)
{
    console.log("voce e da grifinoria")
}
else if(inteligencia >=80)
{
    console.log("voce e da corvinal")
}
else if(lealdade >=80)
{
    connsole.log("voce e da lufa-lufa")
}
else
{
    console.log("voce e da sonserina")
}