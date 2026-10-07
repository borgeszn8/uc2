const prompt = require("prompt-sync")()

let traco = prompt("Qual seu principal traco? (coragem, inteligencia, lealdade) \n ")

if(traco === "coragem")
{
    console.log("Elevem")
}
else if(traco === "inteligencia")
{
    console.log("Will")
}
else if(traco === "lealdade")
{
    console.log("Mike")
}
else
{
    console.log("Demongorgon?")
}