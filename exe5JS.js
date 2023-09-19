/* As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze.
Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra. */

var quantidade = prompt("Digite a quantidade de maçãs:");

if(quantidade<12){
    total= quantidade * 0.3;
}
else{
    total = quantidade * 0.25;
}

alert("O valor da compra é: " + total + " Reais");
