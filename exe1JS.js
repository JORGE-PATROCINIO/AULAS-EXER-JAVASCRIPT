/*Faça um programa que receba a idade e o peso de uma pessoa. De acordo com a tabela a seguir, verifique e mostre em qual grupo de risco essa pessoa se encaixa.

IDADE	                    ATÉ 60KG	ENTRE 60 E 90KG(inclued)	    ACIMA DE 90KG
Menores que 20 anos	            9	           8	                          7
De 20 a 50 anos              	6	           5	                          4
Maiores  que 50 anos	        3	           2	                          1
*/

let idade = prompt("Digite a sua idade: ");
let peso  = prompt("Digite seu peso: ");

if(idade < 20){
    if(peso <= 60){
        alert("Seu grupo de risco é 9!");
    }
    else if(peso > 60 && peso <= 90){
        alert("Seu grupo de risco é 8!");
    }
    else if(peso > 90){
        alert("Seu grupo de risco é 7!");
    }
}
else if( idade >= 20 && idade <= 50){
    if(peso <= 60){
        alert("Seu grupo de risco é 6!");
    }
    else if(peso > 60 && peso <= 90){
        alert("Seu grupo de risco é 5!");
    }
    else if(peso > 90){
        alert("Seu grupo de risco é 4!");
    }
}
else if( idade > 50){
    if(peso <= 60){
        alert("Seu grupo de risco é 3!");
    }
    else if(peso > 60 && peso <= 90){
        alert("Seu grupo de risco é 2!");
    }
    else if(peso > 90){
        alert("Seu grupo de risco é 1!");
    }
};
