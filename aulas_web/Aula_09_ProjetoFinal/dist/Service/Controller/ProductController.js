"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaModalidade = exports.pesquisarModalidade = exports.CadastrarModalidade = void 0;
const ProductService_1 = require("../ProductService");
const productService = new ProductService_1.ProductService();
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
        res.status(400).json({ message: error.message });
    }
}
exports.listaModalidade = listaModalidade;
;
