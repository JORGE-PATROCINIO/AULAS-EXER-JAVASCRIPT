class Banco {
    constructor(saldo,saque,deposito){
        this.saldo = saldo;
        this.saque=saque;
        this.total = saldo - saque;
        this.deposito = deposito;
    }
    
    depositoo(){
        if(this.deposito > 0){
            console.log( "Seu valor atualizado é de: R$ " + (this.deposito +this. saldo));
        }
        else{
            console.log("Não houve depósito!")
        }
    }

    situacaoConta(){
        if(this.total>=0) {
            console.log("Saque Autorizado!");
            console.log("seu saldo atual é de: R$ " + this.total);
         }
        else{
            console.log("Saque não autorizado!")
        }

    }
    
}
// ################### Saque + saldo atualizado #######################
console.log("testando o médodo saque !!!")
console.log("###########################")
let valor = new Banco (600,400,800);    
console.log(valor.situacaoConta());

// ##################  deposito + saldo atualizado ##########################
console.log("testando o médodo depósito!!!")
console.log("#############################")
let depos = new Banco (600,200,100);  
console.log(depos.depositoo());
