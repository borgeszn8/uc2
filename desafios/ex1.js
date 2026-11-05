
// desafio do cofre

const senha = 2026
const maxTentativas = 3
let tentativas = 0
let aberto = false

while (tentativas < maxTentativas) {
    const palpite = Number(prompt("Qual o seu palpite?"))
    tentativas++

    if (palpite === senha) {
        aberto = true
        console.log("Cofre aberto!")
        break
    } else {
        const restantes = maxTentativas - tentativas
        if (restantes > 0) {
            console.log(`Senha incorreta. Restam ${restantes} tentativa(s).`)
        }
    }
}

if (!aberto) {
    console.log("Cofre bloqueado! Suas tentativas acabaram.")
}