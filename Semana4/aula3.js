class Veiculos {
    constructor(tipoVeiculo,marca,modelo,ano,placa,qtdMultas,velocidadeMaxima){
    this.tipoVeiculo = tipoVeiculo ;
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
    this.placa = placa
    this.qtdMultas = qtdMultas
    this.velocidadeMaxima = velocidadeMaxima
    }

    get tipoModelo() {
        return this.tipoVeiculo + " - " + this.modelo
    }

    adicionaMulta(codigoDaPlaca){
        if (codigoDaPlaca === this.placa) {
         this.qtdMultas++
        }
        return this.qtdMultas
    }



}

const codigoDaPlaca = "jaa0122"
const fordka = new Veiculos (`carro`,`ford`,`ka`,"2020","jaa0122","0","200km")

console.log(fordka)
console.log(fordka.tipoModelo)