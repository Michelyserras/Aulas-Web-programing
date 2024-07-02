"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaService = void 0;
const vendaPaes_1 = require("../Model/vendaPaes");
const EstoqueRepository_1 = require("../Repository/EstoqueRepository");
const VendaRepository_1 = require("../Repository/VendaRepository");
const itensRepository_1 = require("../Repository/itensRepository");
const EstoqueService_1 = require("./EstoqueService");
class VendaService {
    constructor() {
        this.vendaRepository = new VendaRepository_1.VendaRepository();
        this.estoqueRepository = new EstoqueRepository_1.EstoqueRepository();
        this.estoqueService = new EstoqueService_1.EstoqueService();
        this.itensRepository = new itensRepository_1.itensRepository();
        //     this.vendaRepository.vendasList.forEach(itensComprados => {
        //         this.itensRepository.itensList.forEach(produto => {
        //             const itens = new ItemVenda(produto.estoqueId, produto.quantidade);
        //             const estoqueExiste = this.estoqueRepository.consultaEstoqueId(produto.estoqueId); // constante que vai verificar se o estoque existe
        //             console.log("Estoque existe", estoqueExiste);
        //             if(estoqueExiste){
        //                 if(produto.quantidade > estoqueExiste.quantidade){ // verificando se há estoque suficiente para realizar a venda
        //                     throw new Error("Estoque do produto é insuficiente para realizar a venda!" + estoqueExiste);
        //                 } 
        //                 else if(produto.quantidade < estoqueExiste.quantidade){// caso haja, vamos adicionar os produtos a lista de itens;
        //                      // adicionando produtos na lista
        //                     console.log("Adicionando itens a compra", itens);
        //                 }
        //                 this.itensRepository.adicionarItens(itens);
        //             } 
        //         });
        //     }
        //     const produtos = this.itensRepository.itensList;
        //    
        // }
        // // verificando se estoque existe e somando o mesmo;
        //     for (const item of itensComprados){
        //         const estoque = this.estoqueService.ProcurarPorID(item.estoqueId);
        //         if( !estoque || estoque.quantidade < item.quantidade){
        //             throw new Error("Produto fora de estoque");
        //         }
        //         valorTotal += estoque.precoVenda * item.quantidade;
        //     }
        //     const novaCompra = new VendaPaes(cpfCliente, valorTotal, itensComprados);
        //     this.vendaRepository.realizarVenda(novaCompra);
        //     for (const item of itensComprados) {
        //         const estoqueItem = this.estoqueService.ProcurarPorID(item.estoqueId);
        //         if (estoqueItem) {
        //             estoqueItem.quantidade -= item.quantidade;
        //             this.estoqueService.atualizarEstoque(estoqueItem);
        //         }
        //     }
        //     return novaCompra;
        // 
    }
    // vendas
    cadastrarCompra(compraData) {
        const { cpfCliente, itensComprados } = compraData;
        let total = 0;
        if (!cpfCliente || !itensComprados) {
            throw new Error("Informações incompletas");
        }
        for (let i = 0; i <= itensComprados.length; i++) { // somando valor total
            const estoque = this.estoqueRepository.consultaEstoqueId(itensComprados[i].estoqueId);
            if (estoque) {
                if (estoque.quantidade < itensComprados[i].quantidade) {
                    throw new Error("Estoque insuficiente...");
                }
                else {
                    console.log("estoque atual", estoque);
                    total += itensComprados[i].quantidade * estoque.precoVenda;
                    console.log("somando valores", total);
                    const produtos = itensComprados;
                    const novaCompra = new vendaPaes_1.VendaPaes(cpfCliente, total, produtos);
                    this.vendaRepository.realizarVenda(novaCompra);
                    console.log("Compra realizada com sucesso!", novaCompra);
                    estoque.quantidade -= itensComprados[i].quantidade;
                    console.log("estoque depois da compra", estoque);
                    return novaCompra;
                }
            }
            else {
                throw new Error("Produto não existe!");
            }
        }
        throw new Error("Erro ao realizar compra...");
    }
}
exports.VendaService = VendaService;
