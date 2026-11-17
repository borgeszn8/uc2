const prompt = require("prompt-sync")()

const mensagem = prompt("Digite sua mensagem: ")
let mensagem1 = mensagem.toLowerCase()

if(mensagem1.includes("urgente")){
    console.log("Mensagem prioritaria")
}
else{
    console.log("Mensagem comum")
}