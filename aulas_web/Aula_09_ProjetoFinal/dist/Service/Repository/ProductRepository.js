"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
class ProductRepository {
    constructor() {
        this.modalidadeList = [];
    }
    cadastrarModalidade(product) {
        this.modalidadeList.push(product);
    }
    filtrarPorId(id) {
        return this.modalidadeList.find(Modalidade => Modalidade.id === id);
    }
    exibeTodasModalidade() {
        return this.modalidadeList;
    }
}
exports.ProductRepository = ProductRepository;
