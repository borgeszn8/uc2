// Importa o prompt-sync
const prompt =  require ('prompt-sync')()

// pede o nome do usuario 
const nome = prompt('Qual seu nome?')

// Pede a idade do ususario
const idade = prompt('quantos anos voce tem?') 

// exibe a resposta 
console.log(` ola, ${nome}! voce tem ${idade} anos.`)