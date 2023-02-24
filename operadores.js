// ############### OPERADORES #####################

const n = 1;
const n2 = 2;

console.log("operadores aritméticos");

console.log("soma: " + ( n + n2) );          // adição
console.log("subtração: " + ( n2-n) );       // subtração
console.log("multiplicação: " + ( n * n2) ); // multiplicação
console.log("divisão: " + ( n / n2) );       //  divisão
console.log("potência: " + ( n2**2) );       // potência
console.log("incremento");
let x = 1;
console.log(x);
x++                                             // incremento
console.log(x);
x++
console.log(x);
x++
console.log(x);
console.log("decremento");
x--                                         // decremento
console.log(x);
x--
console.log(x);
x--
console.log(x);

console.log("módulo");  // resto da divisão "mod"!

console.log("3/2 = resto " + (3%2));

// ############## operadores atribuição ###############
console.log("OPERADORES ATRIBUIÇÃO");

console.log("RECEBE: " + x);
x+= 1;
console.log("RECEBE + 1: " + x);

// ################# OPERADORES DE COMPRAÇÃO #################

console.log("OPERADORES DE COMPARAÇÃO");

console.log( 1>=2);      // maior ou igual que
console.log( 1<=2);      // menor ou igual que
console.log( 1>2);       // maior que
console.log( 1<2);       // menor que
console.log( 1==2);      //  igual a
console.log( 1!=2);       // diferente

// obs :   javascript reconhece igualdade do numero 1 com a string 1 (1=="1")=true
// obs: para solucionar a questão anterior___________________________(1==="1")= false

console.log( 1=="1");  // retorna verdadeiro
console.log( 1==="1"); // retona  falso

// obs :   javascript reconhece diferença do numero 1 com a string 1 (1!="1")=false
// obs: para solucionar a questão anterior___________________________(1!=="1")= true

console.log( 1!="1");  // retorna falso
console.log( 1!=="1"); // retona  verdadeiro


// #########################  OPERADORES LÓGICOS #######################

console.log("operadores lógicos");

// operador &&(and) só retorna verdadeiro se e somente se ambas forem verdadeiras!
console.log(false && false); // false
console.log(false && true);  // false
console.log(true && false);  // false
console.log(true && true);   // true

// operador ||(or) só retorna verdadeiro se e somente se uma for verdadeira!
console.log(false || false);  // false
console.log(false || true);   // true
console.log(true  || false);  // true
console.log(true  || true);   // true


// operador not e null(and) só retorna verdadeiro se  se o valor for falso ou nulo!
var s=null;
console.log(!s); // retorna true, poruqe se trata de uma variavél nula!

var v = true;
console.log(!v); //retorna false, por que trata-se de uma variavél valor verdadeiro(não é uma negação)!

var r = false;
console.log(!r); //retorna true, porque trata-se de uma variavém com valor de negação!