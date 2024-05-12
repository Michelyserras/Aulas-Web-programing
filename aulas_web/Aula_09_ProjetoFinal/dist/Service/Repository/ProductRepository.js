"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
class ProductRepository {
    constructor() {
        // Modalidade
        this.modalidadeList = [];
        //Modalidade Fim
        // Estoque
        this.estoqueList = [];
        //Estoque fim
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
    alterarModalidade(produto) {
        const index = this.modalidadeList.indexOf(produto);
        if (index !== -1) {
            this.modalidadeList[index] = produto;
        }
        return index;
    }
    deletaModalidade(product) {
        //this.modalidadeList = this.modalidadeList.filter((item) => item !== product);
        const index = this.modalidadeList.indexOf(product);
        if (index !== -1) {
            this.modalidadeList.splice(index, 1);
        }
    }
    adicionarEstoque(produto) {
        this.estoqueList.push(produto);
    }
    listarEstoque() {
        return this.estoqueList;
    }
}
exports.ProductRepository = ProductRepository;
