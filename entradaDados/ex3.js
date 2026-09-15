const prompt = require('prompt-sync')()

const nameDoAlienigina = prompt('What is name of the alien?')
const planetaDeOrihgem = prompt('What is the planet of origem?')
const quantidadeDeOlhos = prompt('What is the quantity of eyes?')
const comidaTerrestreFavorita = prompt('What is the favorite terrestrial food?')
const motivoDaVisita = prompt('What is the reason for the visit?')

console.log(`The name of alien is ${nameDoAlienigina}, the planet of origem is ${planetaDeOrihgem} he hes ${quantidadeDeOlhos} eyes and the food favorite terrestrial is ${comidaTerrestreFavorita} and he visited the planet Terra because ${motivoDaVisita}.`)

console.log(" \n==========================================================")
console.log("FICHA DE IMIGRAÇAO")
console.log("=============================================================")

console.log("Name:  " + nameDoAlienigina)
console.log("Planet of origem:  "  + planetaDeOrihgem)
console.log("he hes eyes:  "  + quantidadeDeOlhos)
console.log("the food favorit terrestrial:  "  + comidaTerrestreFavorita)
console.log("reason for the visit:  "  + motivoDaVisita)