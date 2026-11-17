const prompt = require("prompt-sync")()

let deficiencia = prompt("\n Voce tem alguma deficiencia? (sim/nao)")
let idoso = prompt("\n Voce e idoso? (sim/nao)")

let podeEstacionar =  deficiencia === "sim" || idoso === "sim"

console.log("Voce pode estacionar:", podeEstacionar)