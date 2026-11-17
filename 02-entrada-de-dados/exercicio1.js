const prompt = require('prompt-sync')()

const name = prompt('wath you name?')
const age = prompt('how old are you?')
const city = prompt('where do you live?')
const profession = prompt('what is your profession?')

console.log(`Hello, ${name}! You are ${age} years old, live in ${city}, and work as a ${profession}.`)

