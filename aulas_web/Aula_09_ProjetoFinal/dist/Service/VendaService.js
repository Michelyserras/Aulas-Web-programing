"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaService = void 0;
const vendaPaes_1 = require("../Model/vendaPaes");
const EstoqueRepository_1 = require("../Repository/EstoqueRepository");
const VendaRepository_1 = require("../Repository/VendaRepository");
const ModalidadeRepository_1 = require("../Repository/ModalidadeRepository");
class VendaService {
    constructor() {
        this.vendaRepository = new VendaRepository_1.VendaRepository();
        this.estoqueRepository = new EstoqueRepository_1.EstoqueRepository();
        this.modalidadeRepository = new ModalidadeRepository_1.ModalidadeRepository();
    }
    // vendas
    cadastrarCompra(compraData) {
        const { cpfCliente, itensComprados } = compraData;
        let total = 0;
        if (!cpfCliente || !itensComprados) {
            throw new Error("Informações incompletas");
        }
        for (let i = 0; i < itensComprados.length; i++) { // loop usado para percorrer a lista de itens 
            const estoque = this.estoqueRepository.consultaEstoqueId(itensComprados[i].estoqueId); //verificando se o estoque existe
            if (estoque) { // a compra apenas sera realizada se houver um estoque disponivel
                if (estoque.quantidade < itensComprados[i].quantidade) { // se o a quantidade disponivel de produtos for menor que a quantidade comprada
                    throw new Error("Estoque insuficiente...");
                }
                else {
                    // caso contrário a venda será realizada
                    itensComprados[i].nome = this.modalidadeRepository.filtrarPorNome(estoque.modalidadeId); // adicionando o nome do produto na venda
                    console.log("estoque atual", estoque);
                    total += itensComprados[i].quantidade * estoque.precoVenda; // somando valor total
                    console.log("somando valores", total);
                    estoque.quantidade -= itensComprados[i].quantidade; //atualizando quantidade de itens no estoque
                    console.log("estoque depois da compra", estoque);
                }
            }
            else {
                throw new Error("Produto não existe!");
            }
        }
        const produtos = itensComprados;
        const novaCompra = new vendaPaes_1.VendaPaes(cpfCliente, total, produtos);
        this.vendaRepository.realizarVenda(novaCompra);
        console.log("Compra realizada com sucesso!", novaCompra);
        return novaCompra;
    }
    listarCompras() {
    }
}
exports.VendaService = VendaService;
