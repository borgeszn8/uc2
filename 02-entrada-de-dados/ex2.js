const prompt = require('prompt-sync')()

const nameCliente = prompt('What is name?')
const flavorPizza = prompt('What is the flavor of the pizza?')
const sizePizza = prompt('what is the size of the pizza?')

console.log(`Hello, ${nameCliente}! You ordered a ${flavorPizza} pizza of size ${sizePizza}.`)

