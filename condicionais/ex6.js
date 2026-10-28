const prompt = require("prompt-sync")()

let distancia = Number(prompt("Qual é a distancia da entrega?  "))

if(distancia <=3)
{
    console.log("entrega rapida")
}
else if(distancia <=10)
{
    console.log("entrega normal")
}
else if(distancia >10)
{
    console.log("entrega de longa distancia")
}
//if-else pois é melhor trabalhar com numeros usando ela