"use strict";
class Carro {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    get getmarca() {
        return this.getmarca;
    }
    set setmarca(marca) {
        this.marca = marca;
    }
    get getmodelo() {
        return this.getmodelo;
    }
    set setmodelo(modelo) {
        this.modelo = modelo;
    }
    get getano() {
        return this.getano;
    }
    set setano(ano) {
        this.ano = ano;
    }
    get getcor() {
        return this.getcor;
    }
    set setcor(cor) {
        this.cor = cor;
    }
    calcularIdade(anoAtual) {
        return anoAtual - this.ano;
    }
    ;
    exibirInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`);
    }
}
const meuCarro = new Carro("Toyota", "Corolla", 2020, "Prata");
const meu2Carro = new Carro("Fiat", "Mobi", 2018, "Preto");
console.log("Exercicio 1 - \n ");
meuCarro.exibirInfo();
meu2Carro.exibirInfo();
console.log("A idade do seu carro é: ", meu2Carro.calcularIdade(2024));
