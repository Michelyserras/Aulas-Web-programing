"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaPaes = void 0;
class VendaPaes {
    constructor(cpfCliente, valorTotal, itensComprados) {
        this.id = this.gerarId(); // como serão realizadas varias vezes é melhor que o id sejam numeros aleatorios
        this.cpfCliente = cpfCliente;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
    }
    gerarId() {
        return Math.floor(Math.random() * 10000);
    }
}
exports.VendaPaes = VendaPaes;
