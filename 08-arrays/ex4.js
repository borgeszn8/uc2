let mochilaMisty = ["Staryu", "Psyduck", "Goldeen", "Starmie"]
let mochilaBrock = ["Onix", "Geodude", "Vulpix"]
let mochilaJessie = ["Arbok", "Wobbuffet", "Lickitung"]
let mochilaJames = ["Weezing", "Victreebel", " Cacnea", "Chimecho"]

console.log("Na mochila do Misty tem os seguintes pokemons: ", mochilaMisty)
console.log("Na mochila do Brock tem os seguintes pokemons: ", mochilaBrock)
console.log("Na mochila do  tem os seguintes pokemons: ", mochilaJessie)
console.log("Na mochila do James tem os seguintes pokemons: ", mochilaJames)

console.log(mochilaMisty[0])
console.log(mochilaBrock[2])
console.log(mochilaJessie[1])
console.log(mochilaJames[3])
console.log(mochilaMisty.length)

if(mochilaBrock.length > mochilaJames.length){
    console.log("Brock tem mais pokemons na mochila")
}
else{
    console.log("James tem mais pokemons na mochila")
}

if(mochilaMisty.length > mochilaBrock.length){
    console.log("Misty tem mais pokemons na mochila")
}
else{
    console.log("Brock tem mais pokemons na mochila")
}
