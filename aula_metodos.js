// ####### ESTUDANDO MÉTODOS JS ########

console.log("################## MÉTODOS CONST ###############");

const nome = "JORGE";
const sobrenome = " AUGUSTO";
const string = "jorge";
const idade = 18;
const carteira = 100.10;
let numero = "1";

// DESCOBRINDO O TIPO DE VARIAVEL COM TYPEOF !

 console.log(typeof nome);

//concatenando(mesclando variaveis)!

console.log(nome.concat(sobrenome));

//FORNECER UM VALOR E RETORNANDO COM A POSIÇÃO COM INDEXOF!

console.log(nome.indexOf("G"));

//FORNECER A POSIÇÃO E RETORNANDO COM O VALOR!

console.log(nome[3]); // MOSTRA O CARACTER NA POSIÇÃO 3 DA STRING "NOME"

//RETORNA COM O NÚMERO DE CARACTER DE UMA STRING COM LENGTH!

console.log(nome.length);

//ALTERANDO UMA STRING COM REPLACE!

console.log(nome.replace("J","j")); 
console.log(nome.replaceAll("J","j"));

// COLOCANDO TODOS OS CARACTERES MINÚSCULOS COM toLocaleLowerCase!
// FUNCIONALIDADE EM TELAS DE LOGIN ONDE NÃO PODE LETRAS MAIÚSCULAS(ALTERA TODAS AS LETRAS MAIÚSCULAS QUE FOR DIGITADA PELO USUÁRIO EM MINÚSCULAS)

console.log(nome.toLocaleLowerCase());

// COLOCANDO TUDO EM MAIÚSCULO COM TOUPPERCASE!

console.log(string.toUpperCase());

// ################## MÉTODOS NUMBER ##############################################

console.log("################## MÉTODOS NUMBER ###############");


numero = parseInt(numero); // Garante que a variavel numero seja sempre do tipo number(altera o tipo,uma vez que on tipo "let"possibilita mudar o tipo da variavél)

console.log(typeof numero); // mostra o tipo da variavél numero!

console.log(typeof idade.toLocaleString()); // transforma número em string!

console.log(typeof parseInt("1")); // transforma string em número!

// ###################### MÉTODO BOOL #######################

console.log("################## MÉTODOS BOOL ###############");

const verdadeiro = true;
const falso = false;

console.log(true && true);
console.log(true && false);
console.log(false == false);

// ############################### MÉTODOS ARRAY ############################

console.log("################## MÉTODOS ARRAY ###############");

const alunos = ["josé","isa","lucas","leandro","leonardo"];
const lista = [18,"17",true];

console.log(alunos);     // retornar com o conteúdo da lista!
console.log(alunos[0]);  // retorna com o valor da lista na posição 0 !
console.log(lista);      // retorna o conteúdo da lista mesmo sendo de tipos diferentes!
console.log("Alunos extras: "+ alunos.concat(["maria","marcos"])); // retornar com conteúdo da lista + conteúdo desejado!
console.log(alunos.filter(aluno => aluno[0]=="l")); // filtra os conteúdos da lista alunos que comecem com a letra "l"!
console.log(alunos.find(aluno => aluno[0]=="j")); // filtra o primeiro valor da lista alunos que comecem com a letra "j"!
console.log(alunos.map(aluno => aluno.toUpperCase())); // Torna maiúsculo todo o conteúdo da lista!


// ############################### MÉTODOS OBJECT ############################

console.log("################## MÉTODOS OBJECT ###############");

const pessoa = {nome:"josé", idade: 18, cargo:"professor"};

console.log(pessoa);
console.log(pessoa.nome);
