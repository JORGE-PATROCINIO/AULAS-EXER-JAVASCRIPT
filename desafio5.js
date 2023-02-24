let numero1 = 4
let numero2 = 2
const operacao = "soma"
/**
 * operacao = operação matemática
 * @description essa função é uma calculadora
 */

function calculadora (){
    if (operacao === "soma"){
        return(numero1 + numero2);
    } else if(operacao === "subtracao"){
        return(numero1 - numero2);
    } else if(operacao === "divisao"){
        return(numero1 % numero2);
    } else if(operacao === "multiplicacao"){
        return(numero1*numero2);
    } else {
        return("operacao inválida");
    }   
}
console.log(calculadora());
