"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizaEstoque = exports.ProcurarId = exports.ListaEstoque = exports.adicionarAoEstoque = exports.deletarModalidade = exports.alterarModalidade = exports.listaModalidade = exports.pesquisarModalidade = exports.CadastrarModalidade = void 0;
const ProductService_1 = require("../ProductService");
const productService = new ProductService_1.ProductService();
//Modalidade
function CadastrarModalidade(req, res) {
    try {
        const novaModalidade = productService.cadastrarModalidade(req.body);
        res.status(201).json({
            mensagem: "Modalidade adicionada com sucesso!",
            produto: novaModalidade
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.CadastrarModalidade = CadastrarModalidade;
function pesquisarModalidade(req, res) {
    try {
        const id = productService.consultarModalidade(req.query.id);
        if (id) {
            res.status(200).json({
                mensagem: "Modalidade encontrada com sucesso!",
                modalidade: id,
            });
        }
        else {
            res.status(404).json({ mensagem: "Modalidade não encontrado." });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.pesquisarModalidade = pesquisarModalidade;
;
function listaModalidade(req, res) {
    try {
        res.status(200).json(productService.getModalidades());
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}
exports.listaModalidade = listaModalidade;
;
function alterarModalidade(req, res) {
    try {
        const modalidadeAtlz = productService.alterarModalidade(req.body);
        res.status(201).json({
            mensagem: "Modalidade alterada com sucesso!",
            modalidade: modalidadeAtlz,
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.alterarModalidade = alterarModalidade;
function deletarModalidade(req, res) {
    try {
        productService.excluirModalidade(req.query.id);
        res.status(202).json({
            mensagem: "Modalidade deletada com sucesso!",
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.deletarModalidade = deletarModalidade;
// Modalidade fim
// Estoque
function adicionarAoEstoque(req, res) {
    try {
        const novoProduto = productService.adicionarEstoque(req.body);
        res.status(201).json({
            mensagem: "Estoque adicionado com sucesso!",
            estoque: novoProduto,
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.adicionarAoEstoque = adicionarAoEstoque;
function ListaEstoque(req, res) {
    try {
        res.status(200).json({
            estoque: productService.ListaTodoEstoque(),
        });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}
exports.ListaEstoque = ListaEstoque;
function ProcurarId(req, res) {
    try {
        const id = productService.ProcurarPorID(req.query.id);
        if (id) {
            res.status(200).json({
                message: "Id encontrado com sucesso",
                Estoque: id,
            });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.ProcurarId = ProcurarId;
function atualizaEstoque(req, res) {
    try {
        const estoqueAtlz = productService.atualizarEstoque(req.body);
        res.status(201).json({
            mensagem: "Estoque atualizado com sucesso!",
            modalidade: estoqueAtlz,
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.atualizaEstoque = atualizaEstoque;
// Estoque fim
