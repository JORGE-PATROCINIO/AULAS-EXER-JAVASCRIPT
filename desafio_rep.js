/*Laços de Repetição | Desafio
Mariana conta...
Talvez você já tenha escutado aquela famosa música infantil, mariana conta 
1, mariana conta 2, ... O nosso desafio vai fluir nesse contexto, crie uma 
função que receba um número e dentro dessa função crie um laço de 
repetição que imprima no console mariana conta 1, e daí por diante até 
chegar no número que o usuário preencheu.
A contagem deve começar pelo número 1;
Caso o número selecionado seja zero deve imprimir algum erro;
Números decimais devem ser transformados em inteiros;*/
  
let n = 20;

/** n = numero escolhido pelo usuário
 * @description Essa função faz mariana contar até n!
 */
function mariana(){
    if (n === 0){
        console.log("Error");
     }
    for(let index = 1;index<=n;index++){
    console.log("Mariana conta " + index);
    }
}
console.log(mariana());
