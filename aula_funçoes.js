// ##################################  AULA FUNÇÕES  ###############################

console.log("aula funções!");

// PARADIGMA FUNCIONAL--(FUNÇÕES E EVENTOS)
// PARADIGMA ORIENTADO A OBJETOS(POO) --- (CLASSES/OBJETOS/INTERFACES)

// FUNÇÃO COMUM

function soma() { 
    console.log(1+1);
}

soma()  // chamando a função "soma"!

function mat(n,y) {          // função com parâmetros
    console.log(n + y);    
}

mat(2,3);
mat(2,2);
mat(3,3);

function hipotenusa ( catetoAdj, catetoOpo){
    const calcCatetos = catetoAdj ** 2 + catetoOpo ** 2
    return calcCatetos
}

console.log(hipotenusa(9,4));

// FUNÇÃO ASSINCRONA
// função aguarda a chamada da url para executar, se fosse feita de forma sincrona e a rede estivesse lenta por exemplo, ocorreria um erro.. de forma assincrona "async" o sistema aguarda a chamada do sistema para executar a função!

async function teste() {
    const resposta = await fetch ("https://github.com/JORGE-PATROCINIO") // "fecht" requisiçção de url
    return resposta
}

teste().then(e=>{
    console.log("sucesso")
}).catch(err => console.log("erro"))


//  ####################### ARROW FUNCTION  ###########################################

// simplifica o código
// Não é necessério definir a função... ela pode ser usada como variável.... fazendo a mesma ter o comportamento de uma função! ex:

const fn = () => console.log("olá")
fn()

// ########################### callback ######################################

function login (user,callback) {
   user === "admin"? callback("seja bem vindo") : callback("erro - usuário desconhecido")
}

login("admin",(msg) => {
    console.log(msg)
})


// ####################  documentação de função ######################## (crtl+space) - atalho

/**
 * 
 * @param {number} n   quantidades de parcelas
 * @param {number} n2  valor do empréstimo
 * @description essa função calcula a quantidade de juros de um empréstimo
 * @return{number} valor total do empréstimo
 *
 */

function mult(n,n2){

}
mult()