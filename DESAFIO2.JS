// ############## DESAFIO 2 ##############

const string = "bala";
let numero ="34";
const frutas = ["banana","kiwi","limão","acerola","melao","melancia"];
const carro = {placa:"aaa-1111",ano:"2010",cor:"verde"}

//(a)
console.log(string[1]);
//(b)
numero = parseInt(numero);
console.log(typeof numero);
//(c)
console.log(frutas);
console.log(frutas.filter(fruta => fruta[0]=="m" ));
console.log(frutas.find(fruta => fruta[0]=="m" ));
console.log(frutas.map(fruta=>fruta =="banana"));
//(d)
console.log(carro);
console.log(carro.ano);





