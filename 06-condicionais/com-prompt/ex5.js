const prompt = require("prompt-sync")()

const temperatura = Number(prompt("Qual a temperatura atual? "))

if(temperatura >=30.1)
{
    console.log("Esta derretnedo! Bora pra piscina!")
}
else if(temperatura >=15)
{
    console.log("Climinha agradavel")
}
else if(temperatura <15)
{
    console.log("Hora de cobertor")
}