"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
class ProductRepository {
    constructor() {
        this.productList = [];
    }
    insereProduto(product) {
        this.productList.push(product);
    }
    filtrarProdutoPorIDeNome(id, nome) {
        return this.productList.find(product => product.id === id && product.name === nome);
    }
    filtrarProdutoPorID(id) {
        return this.productList.find(product => product.id === id);
    }
    filtrarProdutoPorNome(nome) {
        return this.productList.find(product => product.name === nome);
    }
    filtraTodosProdutos() {
        return this.productList;
    }
}
exports.ProductRepository = ProductRepository;
