/* Escreva um programa que verifique a validade de uma senha fornecida pelo usuário. A senha válida é o número 1234. Devem ser impressas   as seguintes mensagens: ACESSO PERMITIDO caso a senha seja válida e  ACESSO NEGADO caso a senha seja inválida.
 */

i= 1

while(i<=3){
    let senha = prompt("Digite sua senha de 4 digítos:");

    if (senha !== "1234"){
        alert(" Senha inválida, acesso negado!");
        i++
        if(i>3){
            alert("Acesso Bloqueado!")
        }
   }
    else{
        alert("Acesso permitido!")
        i=4 // para sair do looping
   }
}
