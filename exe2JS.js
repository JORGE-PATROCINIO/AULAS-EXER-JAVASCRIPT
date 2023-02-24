/* Faça um programa que receba a idade de um nadador e mostre sua categoria, para uma competição usando as regras a seguir. Para idade inferior a 5, deverá mostrar alguma mensagem.

   CATEGORIA	                  IDADE
    Infantil	                5 a 7 anos
    Juvenil - Nivel 1	        8 a 10 anos
    Juvenil - Nivel 2	        11 a  15 anos
    Adulto	                    16 a 30 anos
    Sênior	                    Acima de 30 anos
 */

 let idade = prompt("Digite a idade: ");

 if(idade >= 5 && idade <= 7){
    alert("Categoria Infantil ");
 }
 else if(idade >= 8 && idade <= 10){
    alert("Categoria Juvenil-Nivel 1! ");
 }
 else if(idade >= 11 && idade <= 15){
    alert("Categoria Juvenil-Nivel 2! ");
 }
 else if(idade >= 16 && idade <= 30){
    alert("Categoria Adulto! ");
 }
 else if(idade >= 30 && idade <= 80){
    alert("Categoria Sênior! ");
 }
 else {
    alert("Não temos categoria para essa idade!");
 }
 