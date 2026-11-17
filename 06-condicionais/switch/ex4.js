const prompt = require("prompt-sync")()

let comando = prompt("qual seu comando: ")

switch(comando)
{
    case "desligar":
        console.log("Desligando o sistema...")
        break
    case "reiniciar":
        console.log("Reiniciando...")
        break
    case "suspender":
        console.log("Entrando em modo economia de energia. ")
        break
    default:
        console.log("Comando invalido")
}