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
        return Date.now();
    }
}
exports.EstoquePaes = EstoquePaes;
