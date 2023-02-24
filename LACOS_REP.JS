// ######################  LAÇOS DE REPETIÇÃO #######################

let index = 0;
while(index < 10) {
    console.log(index);
    index++
}
// ##################################################################
function random (n1){
    return n1*2;
}

while (index <10){
    console.log(random(index))
}
//################ FOR ##############################################

for(let index = 0;index < 10 ;index++){
    console.log(index);
}

// ################## FOR IN #########################################

const array = [ "morango","uva","banana","melancia"];

for(let key in array){                                      // similar a função map!
    console.log(key);
}

for(let key in array){
    console.log(array[key]);
}


const obj = {name:"josé",idade:18}

for(let key in obj){                           // varre o valor do objeto
    console.log(obj[key]);
}

for(let key in obj){                          //  varre a chave do objeto
    console.log(key);
}


// ############################## FOR OF ###############################################

const arrays = [ "morango","uva","banana","melancia","limão"];

for(let value of arrays){                   // faz a varredura da lista , retornando com os valores!
    console.log(value);
}

const objs = [{name:"jorge"}]

for(let value of objs){                     // for of roda em uma lista ou lista de objetos!
    console.log(value);
}
