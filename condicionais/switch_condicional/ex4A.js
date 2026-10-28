const prompt = require("prompt-sync")()

let plano = Number(prompt("Qual o seu plano? (1,2,3,4)  "))

switch(plano)
{
    case 1:
        console.log("Plano com anuncio selecionado")
        break
    case 2:
        console.log("Plano basico selecionado")
        break
    case 3:
        console.log("Plano premium selecionado")
        break
    case 4:
        console.log("Plano familia selecinado")
        break
    default:
        console.log("Plano invalido")
}

//Nesse caso é melhor usar o switch para o codigo ficar mais limpo, se usarmos if-else o codigo ficara muito poluido e com muita informação que com switcch fica masi limpo