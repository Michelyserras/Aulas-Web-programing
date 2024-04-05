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
    filtrarProdutoPorID(id) {
        return this.productList.find(product => product.id === id);
    }
    filtraTodosProdutos() {
        return this.productList;
    }
}
exports.ProductRepository = ProductRepository;
