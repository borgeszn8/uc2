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
/*
=====================================================================================================================================
6. METODO INCLUDES() - VERIFICA EXISTENCIA
===========================================

O metodo includes() verifica se determinado valor existente dentro do array

retorna: 
true = encontrou 
false - nao encontrou 
*/
//exemplo:
let equipeAsh = ["Pikachu", "Charizard", "Squirtle"]

console.log(equipeAsh.includes("Pikachu"))
//===================================================================================================================================
/*
7. METODO PUSH() - ADICIONA AO FINAL
====================================
É uma ação que podemos executar sobre um array. O push adiciona um novo elemento ao FINAL
*/
let equipe = ["Pikachu", "Charmander"]
console.log("Antes: ", equipe)
equipe.push("Bulbasaur")
console.log("Depois: ", equipe)
/*
=====================================================================================================================================
8. METODO UNISHIFT()
====================
unishift() adiciona um elemento na primeira posição
*/
let mochila2 = ["Pikachu", "Eeevee"]
mochila2.unshift("Mew")
console.log(mochila2)
/*
=====================================================================================================================================
9. METODO SHIFT() 
=================
shift() remove o primeiro elemento 
*/
let mochila3 = ["Mew", "Pikachu", "Evee"]
mochila3.shift()
console.log(mochila3)
/*
=====================================================================================================================================
9. METODO POP() - REMOVE O ULTIMO ELEMENTO DE UM ARRAY
*/
const meusPeixes = ["Palhaço", "Mandarim", "Esturjão"]
console.log(meusPeixes)

meusPeixes.pop()
console.log(meusPeixes)//["Palhaço", "Mandarim"]
/*
=====================================================================================================================================
11. METODO SPLICE(i, n) remove "n" elementos à partir da poaição "i" do array
*/
const letras = ["a","b", "c", "d", "e", "f", "g", "h"]
//indices (i)    0   1    2    3    4    5    6    7   

console.log(letras)

letras.splice(2, 1)

//    letras = ["a", "b", "d", "e", "f", "g", "h"]  -> da array letras, na posição 2 ("c") remove 1 (o próprio "c")
//indices (i)    0    1    2    3    4    5    6    

console.log(letras)
letras.splice(3, 2)// ["a", "b", "d", "g", "h"] //->da array letras, na posição 3 ("d") remove 2 ("e" e "f")
console.log(letras)
//=====================================================================================================================================
//12. METODO CONCAT - CONCATENAR SIGNIFICA JUNTAR DOIS OU MAIS ARRAYS PARA FORMAR UMA NOVA
let frutas2 = ["maça", "banana"]
let legumes= ["cenoura", "batata"]

let alimentos = frutas2.concat(legumes)
console.log(alimentos)