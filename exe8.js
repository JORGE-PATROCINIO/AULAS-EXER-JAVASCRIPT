//Crie uma classe que só tenha métodos privados e crie um comportamento para alterá-los sem ser diretamente.

class cidades {
    #city
    #country
    constructor(city,country){
     this.#city = city
     this.#country = country
    }
      get city(){
        return this.#city
      }
      get country(){
        return this.#country
      }
      set city(newcity){
        return this.#city = newcity
      }
      set country(newcountry){
        return this.#country = newcountry
      }
}
let city1 = new cidades("Rio de Janeiro","Brasil");
city1.city="Madrid"
city1.country="Espanha"
console.log(" A cidade de(o)",city1.city,",faz parte do(a)",city1.country,"!");   

    


