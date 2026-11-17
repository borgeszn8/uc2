const prompt = require('prompt-sync')()

let nameOfSurvivor = prompt('What is name?')
let objectOfGun = prompt('object used as a weapon?')
const people2 = prompt('Person who will go along?')
const car = prompt('Usad car to escape?')
let food =  prompt('Food that will take?')

console.log("\n==========================================")
console.log("Survival plan")
console.log("============================================")

console.log("Name of survivor:"  + nameOfSurvivor)
console.log("Object used as a weapons:"  + objectOfGun)
console.log("person who will go along:"  + people2)
console.log("Usad car to escape:"  + car)
console.log("Food that will take:"  + food) 