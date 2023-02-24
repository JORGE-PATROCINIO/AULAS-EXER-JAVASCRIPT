class POO {
    constructor( valor1,valor2){
        this.valor1=valor1;
        this.valor2=valor2;  
    }

    areaquadrado(){
        return this.valor1 * this.valor2;
    }
}
 
const area = new POO(4,4);
console.log("A área do quadrado é: "+(area.areaquadrado()));
