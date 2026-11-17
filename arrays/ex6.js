let listaIngredientes = ["Fermento", "Cenoura", "Leite", "Chocolate", "Ovo", "Goibada", "Morango", "Açucar"]
let baseDoBolo = [listaIngredientes[0], listaIngredientes[1], listaIngredientes[2], listaIngredientes[4], listaIngredientes[7]]
let recheio1 = [listaIngredientes[3]]
let recheio2 = [listaIngredientes[5]]
let recheio3 = [listaIngredientes[6]]

let boloPronto = [baseDoBolo, recheio1, baseDoBolo, recheio2, baseDoBolo, recheio3]

console.log("Lista de ingredientes!")
console.log(listaIngredientes)
console.log("Quantodade de ingredientes!")
console.log(listaIngredientes.length)
console.log("Camadas do bolo")
console.log(boloPronto)