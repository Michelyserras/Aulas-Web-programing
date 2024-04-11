"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_1 = require("../Model/product");
const productRepository_1 = require("./repository/productRepository");
class ProductService {
    constructor() {
        this.productRepository = new productRepository_1.ProductRepository();
    }
    cadastrarProduto(produtoData) {
        const { name, description, price } = produtoData;
        if (!name || !description || !price) {
            throw new Error("Informacoes incompletas");
        }
        const novoProduto = new product_1.Product(name, description, price);
        this.productRepository.insereProduto(novoProduto);
        return novoProduto;
    }
    consultarProduto(id, name) {
        if (id && name) {
            const idNumber = parseInt(id, 10);
            console.log("Com id e name", id, name);
            console.log(id);
            return this.productRepository.filtrarProdutoPorIDeNome(idNumber, name);
        }
        else if (id) {
            const idNumber = parseInt(id, 10);
            console.log("Apenas id: ");
            // parse int define um numero inteiro com 10 casas decimais.
            return this.productRepository.filtrarProdutoPorID(id);
        }
        else if (name) {
            return this.productRepository.filtrarProdutoPorID(name);
        }
        console.log(id);
        return undefined;
    }
    getProducts() {
        return this.productRepository.filtraTodosProdutos();
    }
}
exports.ProductService = ProductService;
