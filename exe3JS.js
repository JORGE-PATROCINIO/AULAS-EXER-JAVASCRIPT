/* Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu). */

let x = prompt("Digite o ano de seu nascimento com 4 digítos: ");
let y = prompt("Digite o ano atual com 4 digítos:") ;

idade = y-x;

if(idade === 16 || idade === 17 || idade >= 60){
    alert("Seu voto é facultativo !")
}

else if(idade >=18 && idade < 60){
    alert("Seu voto é obrigatório !")
}
else{
    alert("Você não pode votar !")
}

