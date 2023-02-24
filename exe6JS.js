/* VARIÁVEIS DE CONSTANTES – STRINGS
1. Vamos no seu primeiro exercício!Crie uma variável chamada nomeCompleto e atribua a ela uma 
string com o seu nome completo;
2. Criar uma variável chamada minhaIdade e atribuir a ela um numero INTEIRO igual a sua idade
3. Criar uma constante chamada NATURALIDADE. Você deve atribuir a ela o nome do país em 
que nasceu. */

const nome = "Jorge Augusto";
const idade = 34;
const natural = "Brasil";

/* TIPOS PRIMITIVOS
4. Aqui você deve criar as as seguintes variáveis e atribuir a elas os seguintes valores:
•meuTamanho - sua alutuira em cm;
•PI = valor da constante PI;
•queroEstudarNaStackX = true;
•computadorLigado = false;
Nota: Lembre-se de utilizar os tipos primitivos corretos para cada variável ( Ex: sua altura 
em cm é um numero inteiro) */


let altura = 177;
const PI ="3.14";
const queroEstudarNaStackX= true;
const computadorLigado = false;

/* OPERADORES ARITIMETICOS
5. O objetivo deste exercício e realizar a multiplicação de 4 por 100:
•crie uma variável multiplicador e atribua a ela o valor 4;
•crie uma variável multiplicando e atribua a ela o valor 100;
•crie uma variável resultadoDaMultiplicacao da variável multiplicador pela variável 
multiplicando */

let multiplicador = 4;
let multiplicando = 100;
let resultado = multiplicador * multiplicando;
console.log(resultado);

/* 6. O objetivo deste exercício e realizar a divisão da 100 por 4:
•crie uma variável dividendo e atribua a ela o valor 100;
•crie uma variável divisor e atribua a ela o valor 4;
•crie uma variável resultadoDaDivisao e atribua a ela a divisão da variável dividendo pela 
variável divisor; */

let dividendo = 100;
let divisor = 4;
let resultadoDaDivisao = dividendo/divisor;
console.log(resultadoDaDivisao);

/*7 . Neste exercício você deve atribuir a soma da variável elementoA com a variável elementoB na 
variável resultadoSoma:*/
var elemmentoA = 2; 
var elemmentoB = 2; 
var resultadoSoma= (elemmentoA+elemmentoB); 
console.log(resultadoSoma);

/* Nota: Neste exercício, todas as variáveis necessárias já estão declaradas, você não precisas criá-las, 
apenas completar o código
8. Neste exercício você deve atribuir a subtração da variável elementoB com a variável elementoA 
na variável resultadoSubtracao */
var elemmentoA = 2; 
var elemmentoB = 2; 
var resultadoSubtracao = (elemmentoB - elemmentoA);    
console.log(resultadoSubtracao);

/* OPERADORES ARITIMETICOS – POTENCIA
9. Declare uma variável chamada potencia e atribua a ela o resultado da variável base elevada e 
variável expoente */
var base = 2;        
var expoente = 2; 
var potencia = base**expoente;
console.log(potencia);


/* OPERADORES ARITIMETICOS – MODULO
10. Complete a expressão atribuindo na variável resultado, o resto da divisão da variável elementoA
por 2. */
var elementoA = 4;        
var result = elementoA % 2; 
console.log(result);

/* OPERADORES DE COMPARAÇÃO - MAIOR QUE
11.Complete o código deste exercício atribuindo, na variável resultado, a seguinte verificação:
variável elementoA É MAIOR QUE variável elementoB? */             
var elemmentoA = 3; 
var elemmentoB = 2; 
var resultados = elemmentoA > elemmentoB;   
console.log(resultados);

/*OPERADORES DE COMPARAÇÃO - MENOR QUE
12.Complete o código deste exercício atribuindo, na variável resultado, a seguinte verificação:*/

var results = elemmentoA < elemmentoB;
console.log(results);

/* OPERADORES DE COMPARAÇÃO – IGUALDADE
13.Complete o código deste exercício atribuindo, na variável resultado, a seguinte verificação:
variável elementoA É IGUAL A variável elementoB? */
var elemmentooA = "banana";
var elemmentooB = "banana";
var resultadoo = elemmentooA === elemmentooB;             
console.log(resultadoo);