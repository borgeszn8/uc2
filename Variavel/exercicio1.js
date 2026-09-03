//const nome = "Lorenzo"
//const sobreNome = "Borgers"
//let idade = "17"
//let estudante = true

//console.log (`Olá, meu nome é ${nome} ${sobreNome}, tenho ${idade} anos e sou estudante: ${estudante}.`)

//========================================

//const nomeDoCachorro = "luki"
//let numeroDeOssos = 5   
//let numeroDeBolinhas = 3
//let OCachorroEstaFeliz = true
//console.log (`O nome do cachorro é ${nomeDoCachorro}, ele tem ${numeroDeOssos} ossos e ${numeroDeBolinhas} bolinhas. O cachorro está feliz? ${OCachorroEstaFeliz}.`)

//const nomeDaNave = "alvin"
//let numeroDeTripulantes = 67
//let destinoDaMissao = "universo Marvel"  
//let tempoEstimadoDaViagem = "212h"
//let AMissaoFoiLancada = true

//console.log (`O nome da nave é ${nomeDaNave}, ela tem ${numeroDeTripulantes} tripulantes, o destino da missão é ${destinoDaMissao}, o tempo estimado da viagem é de ${tempoEstimadoDaViagem} e a missão foi lançada? ${AMissaoFoiLancada}.`)

//===========================================================================================================================

//JUNTAR TEXTOS

//as vezez queremos uma frase utilizando os valores das nossas variaveis

// esse processo e chamado de concatenação (JUNTRR)

//podemos usar 2 formas:
//1. Cm o sinal +
//2. Templete String ``"e ${}

// 1. usando o +
//let personagem = "Bob Esponja"
//let idadeBob = 22

//let frase = " Ola, meu nome e " + personagem + " e tenho " + idadeBob + " anos. "
//console.log(frase)

// 2. Templaate String  

//let personagemAnime = "Luffy"
// let vocacao = "Pirata"

//let = `Ola eu sou o ${personagemAnime} e sou um ${vocacao}.`

//1. jeito, tudo direto
const nome = "Eleven"
let numeroDeMonstro = "5 Monstros"
let numeroDeWaffles = "3 Waffles" 
let elaEstaFeliz = true

//2. jeito separar fazendo por let e depois fazendo o console
console.log (`${nome} enfrentou ${numeroDeMonstro}, comeu ${numeroDeWaffles} e esta feliz? ${elaEstaFeliz}.`)

let frase1 = ` me chamo ${{nome}} enfrentou ${{numeroDeMonstro}} comeu ${{numeroDeWaffles}} e esta feliz? ${{elaEstaFeliz}}.`  

console.log(frase1)
