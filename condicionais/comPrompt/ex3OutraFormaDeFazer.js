const prompt = require("prompt-sync")()

let coragem = Number(prompt("digite sua pontuacao de coragem: "))
let inteligencia = Number(prompt("digite sua pontuacao de inteligencia: "))
let lealdade = Number(prompt("digite sua pontuacao de lealdade: "))

console.log("\nO chapeu Seletor esta pensando...")

if(coragem > 80 && inteligencia && coragem > lealdade)
{
    console.log("\nGrifinoria")
}
else if(inteligencia > 80 && coragem && inteligencia > lealdade)
{
    console.log("\nCorvinal")
}
else if(lealdade > 80 && inteligencia && lealdade > coragem)
{
    console.log("\nLufa-Lufa")
}
else
{
    console.log("\nSoncerina")
}