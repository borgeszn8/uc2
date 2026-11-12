/*
ARRAYS
o que é uma arrays?
É uma estrutura que permite armazenar varios valores dentro de uma unica variavel.

IMPORTANTE:
os elementos ficam organizados por indices 
o primeiro indice é SEMPRE 0
Podemos consultar, adicionar, alterar e remover dados 

==================================================================================================================================
1, POR QUE UTILIZAMOS ARRAYS?
==================================================================================================================================
SEM ARRAYS 
Precisamos criar uma variavel para cada fruta
*/
let fruta1 = "maca"
let fruta2 = "banana"
let fruta3 = "abacaxi"
let fruta4 = "melancia"
let fruta5 = "morango"

console.log(fruta1)
console.log(fruta2)
console.log(fruta3)
console.log(fruta4)
console.log(fruta5)

// COM ARRAYS:
//Armazenamos todas as frutas em uma unica variavel:

let frutas = ["maça", "banana", "abacaxi", "melancia", "morango"]
console.log(frutas)
//===================================================================================================================================
//2. ENTENDENDO OS INDICES
//===================================================================================================================================
/*

cada elemento possui uma posição chamada INDICE
ARRAY:
let frutas = frutas = ["maça", "banana", "abacaxi", "melancia", "morango"]
INDICES---------------    0        1         2           3          4

ATENÇÃO: A CONTAGEM DOS INDICES COMEÇAM EM 0 
*/
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])
console.log(frutas[5])
/*
undefined significa que nao existe um valor na possição consultada, a array vai até indice 4
=====================================================================================================================================
3. ARRAYS PODEM ARMAZENAR DIFERENTES TIPOS
=====================================================================================================================================
*/
//Array de string (texto)
let nomes = ["Adri", "Lucas", "Joana"]
//Array de numeros
let notas = [8, 8, 8]
//Array boleanos
let aprovados = [true, false, true]
//Array da diversidade com diferentes tipos de dados
let alunos = ["Lucas", "multifuncional", 18, true]

//Se quiser mudar algum indice ficaria assim
nomes[0]= "Jovem Eduardo"
console.log(nomes)

/*
=====================================================================================================================================
5. PROPRIEDADE LENGTH
=====================================================================================================================================
A propriedade length informa a quantidade de elementos existentes do arrays
*/
let pokemons = ["Pikachu", "Eevee", "Snorlax"]
console.log(pokemons.length)