// ################### CONDICIONAIS JS ##########################

var senha = 123;
var usuario = "admin";

if (senha === 123 && usuario === "admin"){
    console.log("seja bem vindo!");
} else{
    console.log("ops! senha inválida");
}

const valortotal = 1000;
const saque = 200;
const bloqueada = false

if (saque > valortotal){
    console.log("operação inválida");
}else{
    console.log("operação concluída com sucesso, aguarde a contagem das notas");
}
// #############################################################################################
if(saque+divida > valortotal || bloqueada){
    console.log("operação inválida");
}else{
    console.log("operação concluída com sucesso, aguarde a contagem das notas")
}
//##############################################################################################

const opcao = 1;

if ( opcao === 1){
    console.log("você escolheu falar com o operador!")
} else if ( opcao === 2){
    console.log("você escolheu cancelar o seu cartão!")
} else if ( opcao === 3){
    console.log("você escolheu encerrar o chat!")
} else{
  throw new Error("operação inválida!")
}
//################################################################################################

const username = "admin";

switch (username){
    case"admin":
        console.log("bem vindo admin!");
        break;
    case "coord":   
        console.log("olá coordenador!");
        break;
    default:
        console.log("bem vindo!")
}
// ################################################################################################

const idade = 18

idade >=18 ? console.log("bem vindo!") : console.log("precisa de autorização dos pais!");
// ou
console.log(idade>=18? "bem vindo!" : "presisa da autorização dos pais");

// #################################################################################################

function validaidade(idade){
    if(idade > 18){
        return "bem vindo!"
    }else{
        return "ops"  
    }
}
console.log(validaidade(18))

// ou

function validaidade(idade){
    if(idade >= 18) return "bem vindo!"
    return "ops - idade inválida!"
}
console.log(validaidade(18))
