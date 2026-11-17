const prompt = require('prompt-sync')();

let ano = Number(prompt("Digite um ano: "))

if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0)
{
    console.log("Esse e um ano bissexto")
}
else
{
    console.log("Esse nao e um ano bissexto")
}