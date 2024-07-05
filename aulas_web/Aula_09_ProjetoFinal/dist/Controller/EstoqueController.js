"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletarEstoque = exports.atualizaEstoque = exports.ProcurarId = exports.ListaEstoque = exports.adicionarAoEstoque = void 0;
const EstoqueService_1 = require("../Service/EstoqueService");
const estoqueService = new EstoqueService_1.EstoqueService();
// Estoque
function adicionarAoEstoque(req, res) {
    try {
        const novoProduto = estoqueService.adicionarEstoque(req.body);
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
            estoque: estoqueService.ListaTodoEstoque(),
        });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}
exports.ListaEstoque = ListaEstoque;
function ProcurarId(req, res) {
    try {
        const id = estoqueService.ProcurarPorID(req.query.id);
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
        const estoqueAtlz = estoqueService.atualizarEstoque(req.body);
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
function deletarEstoque(req, res) {
    try {
        const estoque = estoqueService.deletarEstoque(req.body);
        res.status(200).json({
            mensagem: "Estoque excluído com sucesso!",
            Estoque: estoque,
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.deletarEstoque = deletarEstoque;
// Estoque fim
