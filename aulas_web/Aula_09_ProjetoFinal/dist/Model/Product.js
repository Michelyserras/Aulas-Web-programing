"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaPaes = exports.ItemVenda = exports.EstoquePaes = exports.Modalidade = void 0;
class Modalidade {
    constructor(id, nome, vegano) {
        this.id = id;
        this.nome = nome;
        this.vegano = vegano;
    }
}
exports.Modalidade = Modalidade;
class EstoquePaes {
    constructor(id, modalidadeId, quantidade, precoVenda) {
        this.id = id;
        this.modalidadeId = modalidadeId;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda;
    }
}
exports.EstoquePaes = EstoquePaes;
class ItemVenda {
    constructor(estoquePaesId, quantidade) {
        this.estoquePaesId = estoquePaesId;
        this.quantidade = quantidade;
    }
}
exports.ItemVenda = ItemVenda;
class VendaPaes {
    constructor(cpfCliente, valorTotal, itensComprados) {
        this.id = this.gerarId(); // como serão realizadas varias vezes é melhor que o id sejam numeros aleatorios
        this.cpfCliente = cpfCliente;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
    }
    gerarId() {
        return Date.now();
    }
}
exports.VendaPaes = VendaPaes;
