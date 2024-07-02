"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoquePaes = void 0;
class EstoquePaes {
    constructor(modalidadeId, quantidade, precoVenda) {
        this.id = this.gerarId();
        this.modalidadeId = modalidadeId;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda;
    }
    gerarId() {
        return Math.floor(Math.random() * 10000);
    }
}
exports.EstoquePaes = EstoquePaes;
