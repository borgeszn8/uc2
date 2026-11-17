//propriedade string
//sao caracteristicas ou metodos de una string.
// 1. PROPRIEDADE LENGTH
//================================================================
// O QUE É? A propriedade length informa quantos caracteres existem dentro de uma string.
//ela conta:
// - letras, espaços, numeros, simbolos

// SINTAXE: Regras de aplicação 
/*
variavel.length
exemplo:
*/
let nomeCompleto = "Jovem Eduardo"
console.log(nomeCompleto.length)

//RESULTADO= 13

//------------------------------------------------------------------
/*
2. toUpperCase() - TRANSFORMANDO EM MAIUSCULA
nomeDaVariavel.toUpperCase() é un netodo, por isso utilizamos parentesses ()

exemplo na vida real realistica:
imagine um sistema que emite certificado. o aluno informa seu nome utilizando tres letras minusculas e tres maiuscola. fica meio feio, entao  o sistema precisa gerar o certificado com todas as letras maiusculas.

nome informando pelo aluno
*/
let nomeCertificado = "Jovenzinho EduARDINHO"
// convertendo em maiusculo
console.log(nomeCertificado.toUpperCase())

//==================================================================================================================================
/*
3. toLowerCase() -   TRANSFORMANDO EM MINUSCULO 
==============================================================================
O QUE FAZ?
Transforma todas as letras de uma string em minusculo
 
COMO UTILIZAR?
nomeVariavel.toLowerCase()

exemplo da vida real
Imagine um sistema que registra nomes de usuarios uma pessoa digita sue belo nome com letra minusculas e misturadas. O sistema precisa padronizar o texto, apresentando todas as letras em minusculas.
*/ 
//nome de usuario digitado
let usuario = "Ana SILVA"
//Convertendo para maiusculas
console.log(usuario.toLocaleLowerCase())

// LEMBRE-SE

//toUpperCase() -> Maiuscula
//toLowerCase() -> minusculas

//=================================================================================================
/*
4. trim() - REMOVENDO ESPAÇOS DESNECESSARIOS
//==========================================
O QUE FAZ?

Remove os espaços em branco que aparecem no inicio e no final de uma string.

COMO UTILIZAR:
O trim() nao remove espaços entre as palavras.

EXEMPLO PRATICO
Imagine um formulario de matricula do TDS. o adoravel aluno digita seu nome, mas sem perceber adiciona varios espaços antes e depois. o sistema precisa limpar esses espaços.
*/
//Nome com espços extras 
let nomeMatricula = " Aluno Espaçado    "
//Mostrar texto original
console.log("Antes", nomeMatricula)
//Remove os espaços das extremidades
console.log("Depois", nomeMatricula.trim())

//tarefinha: contem o numero de caracteres de ambas 
console.log("matricula sem trim: ",nomeMatricula.length)
console.log("matricula com trim: ",nomeMatricula.trim().length)
/*
=====================================================================================
5. includes() - Procurando um texto
===================================
O QUE FAZ?
Verifica se uma string contem determinada palavra ou trecho de texto.

COMO UTILIZAR?
true -> o texto foi encontrado na string original 
flase -> nao foi encontrado

EXEMPLO DA VIDA REAL:
Imagine um sistema de busca de curso. O aluno pesquisa por uma palavra para ver se ela aparece no nome de um determinado curso.

*/ 
//nome do curso cadastrado
let nomeDoCurso = "Tecnico em Desenvolvimento de Sistemas"
//Procurar a palavra (desenvolvimento)
console.log(nomeDoCurso.includes("Desenvolvimento"))
console.log(nomeDoCurso.includes("Enfermagem"))

/*
=================================================================================================================================
6. replaceAll() - SUBISTINTUINDO TEXTO
--------------------------------------
O QUE FAZ?
Subistitui TODAS as ocorrencias de um texto por outro texto
COMO UTILIZAR?
nomeDaVariavel.replaceAll("Antigo", "Novo")
o pimeiro é o texto que queremos subistituir e o segundo o subistituido

EXEMPLO PRATICO
imagine que uma escola alterou o nome de uma disciplina. Antes era "AlgoritmosNormal". agora será "AlgoritmoMuchoLoco".
precisamos alterar um comunicado
*/
//comunicado original
let comunicado = "A aula de AlgoritmoNormal será em 2045"
//subistituimos todas as ocorrencias 
console.log("Frase antes: ", comunicado)
console.log(comunicado.replaceAll("AlgoritmoNormal", 'AlgoritmoMochoLoco'))

//MAIS DE UMA PALAVRA 
let frase = "O aluno estuda Java no Senac"
//Subistituir Java por JavaScript e Senac por SenacSL
let novaFrase = frase.replaceAll("Java", "JavaScript").replaceAll("Senac", "SenacSL")
console.log("frase1: ",frase)
console.log("frase2: ", novaFrase)